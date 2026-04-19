import { Err, Ok, Result } from "ts-results";

export async function getVapidKey(): Promise<Result<string, string>> {
	try {
		const response = await fetch("/api/vapid-key");
		if (!response.ok) {
			return Err("Failed to get vapid key");
		}
		const { key } = await response.json();
		return Ok(key);
	} catch {
		return Err("Failed to get vapid key");
	}
}

export async function subscribePush(
	subscription: PushSubscriptionJSON,
): Promise<Result<void, string>> {
	try {
		const response = await fetch("/api/subscribe", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(subscription),
		});

		if (!response.ok) {
			return Err("Failed to subscribe");
		}
		return Ok(undefined);
	} catch {
		return Err("Failed to subscribe");
	}
}
