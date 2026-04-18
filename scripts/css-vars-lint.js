import { readFileSync } from "fs";
import { globSync } from "glob";

// Patterns to match CSS variable definitions and usages
const DEF_REGEX = /--[\w-]+(?=\s*:)/g;
const USE_REGEX = /var\(\s*(--[\w-]+)\s*\)/g;

const includePatterns = ["src/**/*.svelte", "src/**/*.css"];
const files = globSync(includePatterns);

const defined = new Set();
const used = new Set();
const usageLocations = [];

files.forEach((file) => {
	const content = readFileSync(file, "utf-8");
	const lines = content.split("\n");

	// Find definitions
	const defMatches = content.matchAll(DEF_REGEX);
	for (const match of defMatches) {
		defined.add(match[0]);
	}

	// Find usages and record their positions
	lines.forEach((line, index) => {
		const useMatches = line.matchAll(USE_REGEX);
		for (const match of useMatches) {
			const varName = match[1];
			used.add(varName);
			usageLocations.push({
				file,
				line: index + 1,
				column: match.index + 1,
				varName,
			});
		}
	});
});

// Check for undefined variables
let hasUndefined = false;
const undefinedErrors = usageLocations.filter(
	(loc) => !defined.has(loc.varName),
);

undefinedErrors.forEach(({ file, line, column, varName }) => {
	console.error(
		`${file}:${line}:${column} — Undefined CSS variable "${varName}"`,
	);
	hasUndefined = true;
});

// Report unused variables
const unused = [...defined].filter((varName) => !used.has(varName));
if (unused.length > 0) {
	console.warn("\nDeclared but never used:");
	unused.forEach((varName) => console.warn(`  ${varName}`));
}

// Final summary and exit code
if (hasUndefined) {
	console.error("\nFound undefined variables. Please fix them.");
	process.exit(1);
} else {
	if (unused.length === 0) {
		console.log("\nAll CSS variables are defined and used.");
	} else {
		console.log(
			"\nNo undefined variables, but there are unused ones (see warnings).",
		);
	}
	process.exit(0);
}
