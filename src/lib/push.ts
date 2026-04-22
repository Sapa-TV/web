import { err, ok, ResultAsync } from "neverthrow";
import type { PushSubscriptionRequest } from "$lib/api";

const MODULO_FOUR = 4;

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
	if (!("serviceWorker" in navigator)) {
		return err(new Error("Service workers not supported"));
	}

	const permission = await Notification.requestPermission();
	if (permission !== "granted") {
		return err(new Error("Notifications not allowed"));
	}

	try {
		const registration = await navigator.serviceWorker.ready;
		const subscription = await registration.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: urlBase64ToUint8Array(vapidKey),
		});

		const json = subscription.toJSON();
		return ok({
			endpoint: json.endpoint ?? "",
			keys: {
				auth: json.keys?.auth ?? "",
				p256dh: json.keys?.p256dh ?? "",
			},
		} satisfies PushSubscriptionRequest);
	} catch {
		return err(new Error("Failed to subscribe"));
	}
}
