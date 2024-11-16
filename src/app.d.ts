// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { D1Database } from "@cloudflare/workers-types"

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}

		interface Platform {
			env: {
				DB: D1Database;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache };
		}

	}
}

export { };
