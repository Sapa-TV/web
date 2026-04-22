import { Api } from "api-contracts";
import type { PushSubscriptionRequest } from "api-contracts";

export const api = new Api({ baseUrl: window.location.origin });

export type { PushSubscriptionRequest };
