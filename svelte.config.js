import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: { $cmp: "src/components" },
		paths: {
			base: "/widgets",
		},
	},
	compilerOptions: { runes: true },
};

export default config;
