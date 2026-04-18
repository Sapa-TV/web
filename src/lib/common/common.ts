export function areEqual(a: string[], b: string[]): boolean {
	return JSON.stringify(a) === JSON.stringify(b);
}

// export function areEqual(a: string[], b: string[]): boolean {
//     return a.length === b.length && a.every((v, i) => v === b[i])
// }
