import type { PushSubscriptionRequest } from "$lib/api";
import { err, ok, ResultAsync } from "neverthrow";

const MODULO_FOUR = 4;

function log(stage: string, details?: unknown) {
	console.log(`[PushNotifications] ${stage}`, details ?? "");
}

function logError(stage: string, error: unknown) {
	console.error(
		`[PushNotifications] Error at stage: ${stage}`,
		error instanceof Error ? error.message : error,
	);
}

export function urlBase64ToUint8Array(base64: string): BufferSource {
	const padding = "=".repeat(
		(MODULO_FOUR - (base64.length % MODULO_FOUR)) % MODULO_FOUR,
	);
	const base64Encoded = (base64 + padding)
		.replace(/-/g, "+")
		.replace(/_/g, "/");
	const rawData = atob(base64Encoded);
	const outputArray = new Uint8Array(rawData.length);
	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray.buffer;
}

export async function subscribeToNotifications(
	vapidKey: string,
): Promise<ResultAsync<PushSubscriptionRequest, Error>> {
	log("Step 1: Checking service worker support");
	if (!("serviceWorker" in navigator)) {
		const error = new Error("Service workers not supported");
		logError("Step 1: Checking service worker support", error);
		return err(error);
	}

	log("Step 2: Requesting notification permission");
	const permission = await Notification.requestPermission();
	if (permission !== "granted") {
		const error = new Error(`Notifications not allowed: ${permission}`);
		logError("Step 2: Requesting notification permission", error);
		return err(error);
	}
	log("Step 2: Notification permission granted");

	try {
		log("Step 3: Getting service worker registration");
		const registration = await navigator.serviceWorker.ready;
		log("Step 4: Checking for existing subscription");
		const existingSub = await registration.pushManager.getSubscription();
		if (existingSub) {
			log("Step 4: Unsubscribing from old push");
			await existingSub.unsubscribe();
		}
		log("Step 5: Subscribing to push manager");

		const subscription = await registration.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: urlBase64ToUint8Array(vapidKey),
		});

		log("Step 6: Converting subscription to JSON");
		const json = subscription.toJSON();
		return ok({
			endpoint: json.endpoint ?? "",
			keys: {
				auth: json.keys?.auth ?? "",
				p256dh: json.keys?.p256dh ?? "",
			},
		} satisfies PushSubscriptionRequest);
	} catch (e) {
		const error = new Error("Failed to subscribe");
		logError("Step 3-6: Push subscription", e);
		return err(error);
	}
}
