export interface Clip {
	id: string;
	title: string;
	game: string;
	duration: string;
	emoji: string;
	postedAgo: string;
}

export interface Game {
	id: string;
	title: string;
	emoji: string;
	progress?: number;
	status?: "in-progress" | "completed" | "queued";
	completion?: string;
}

export interface GalleryItem {
	id: string;
	emoji: string;
}

export interface Spec {
	icon: string;
	label: string;
	value: string;
}

export interface NavItem {
	label: string;
	href: string;
}

export interface SocialLink {
	label: string;
	href: string;
	icon: string;
	variant?: "discord" | "twitch" | "email";
}
