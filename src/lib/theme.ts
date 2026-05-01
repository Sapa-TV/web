export const theme = {
	colors: {
		primary: "#ff6b9d",
		primaryGlow: "rgba(255, 107, 157, 0.6)",
		accent: "#00f5d4",
		accentGlow: "rgba(0, 245, 212, 0.6)",
		bgDark: "#0a0a12",
		bgPanel: "rgba(25, 15, 40, 0.7)",
		bgCard: "rgba(255, 255, 255, 0.03)",
		border: "rgba(255, 255, 255, 0.08)",
		text: "#ffffff",
		textMuted: "#9ca3af",
	},
	radius: 16,
	navHeight: 70,
	transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
} as const;

export const navItems = [
	{ label: "Главная", href: "/" },
	{ label: "Игры", href: "/games" },
	{ label: "Обо мне", href: "/about" },
	{ label: "Галерея", href: "/gallery" },
	{ label: "Связь", href: "/contact" },
] as const;
