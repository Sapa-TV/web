/// <reference lib="webworker" />

import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

export {};

declare const self: ServiceWorkerGlobalScope;

interface PushData {
	title?: string;
	body?: string;
	icon?: string;
	badge?: string;
	data?: unknown;
}

self.addEventListener("push", (event) => {
	console.log("[Service Worker] Push received:", event);

	if (!event.data) {
		return;
	}

	const data = event.data.json() as PushData;

	const title = data.title ?? "Sapa";
	const options = {
		body: data.body ?? "",
		icon: data.icon ?? "/avatar.jpg",
		badge: data.badge ?? "/avatar.jpg",
		data: data.data ?? {},
	};

	event.waitUntil(
		self.registration.showNotification(title, options).then(() => {
			return self.clients.matchAll({ type: "window" }).then((clients) => {
				for (const client of clients) {
					client.postMessage({
						type: "push",
						title,
						body: data.body,
						icon: data.icon,
						data: data.data,
					});
				}
			});
		}),
	);
	console.log("[Service Worker] Notification shown:", title);
});

self.addEventListener("notificationclick", (event) => {
	console.log("[Service Worker] Notification click:", event);

	event.notification.close();

	event.waitUntil(
		self.clients.matchAll({ type: "window" }).then((clientList) => {
			for (const client of clientList) {
				if (client.url === "/" && "focus" in client) {
					return (client as WindowClient).focus();
				}
			}
			// @ts-expect-error - openClient only exists in ServiceWorkerClients
			return self.clients.openClient("/");
		}),
	);
});
