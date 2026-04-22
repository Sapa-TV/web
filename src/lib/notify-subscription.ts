import { browser } from "$app/environment";
import { api } from "$lib/api";
import type { PushSubscriptionRequest } from "$lib/api";
import { subscribeToNotifications } from "$lib/push";
import { err, ok, type Result } from "neverthrow";

function log(stage: string, details?: unknown) {
	console.log(`[NotifySubscription] ${stage}`, details ?? "");
}

function logError(stage: string, error: unknown) {
	console.error(
		`[NotifySubscription] Error at stage: ${stage}`,
		error instanceof Error ? error.message : error,
		error instanceof Error ? error.stack : undefined,
	);
}

export async function subscribeToPush(): Promise<
	Result<PushSubscriptionRequest, string>
> {
	if (!browser) {
		return err("Not in browser environment");
	}

	log("Starting subscription flow");

	log("Step 1: Fetching VAPID public key");
	const vapidResult = await api.getVapidPublicKey();
	if (vapidResult.isErr()) {
		const errorMsg = "Failed to get VAPID public key";
		logError("Step 1: Fetching VAPID public key", vapidResult.error);
		return err(`${errorMsg}: ${vapidResult.error.message}`);
	}
	log("Step 1: VAPID public key received");

	log("Step 2: Subscribing to push notifications");
	const subResult = await subscribeToNotifications(vapidResult.value.key);
	if (subResult.isErr()) {
		const errorMsg = "Failed to subscribe to push notifications";
		logError("Step 2: Subscribing to push notifications", subResult.error);
		return err(`${errorMsg}: ${subResult.error.message}`);
	}
	log("Step 2: Subscribed to push notifications");

	log("Step 3: Posting subscription to server");
	const postResult = await api.postSubscription(subResult.value);
	if (postResult.isErr()) {
		const errorMsg = "Failed to post subscription to server";
		logError("Step 3: Posting subscription to server", postResult.error);
		return err(`${errorMsg}: ${postResult.error.message}`);
	}
	log("Step 3: Subscription posted successfully");

	return ok(subResult.value);
}
