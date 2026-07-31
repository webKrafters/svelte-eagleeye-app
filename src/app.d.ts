// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			requestToken?: {
				_id: string;
			}
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}s
		// interface PageState {}
		// interface Platform {}
	}
}

// src/app.d.ts
export {};

declare global {
  namespace App {
    interface Locals {
      requestToken?: string; // Change 'string' to whatever data type your token is (e.g., string | null)
    }
    
    // interface PageData {}
    // interface Platform {}
    // interface Session {}
  }
}

export {};
