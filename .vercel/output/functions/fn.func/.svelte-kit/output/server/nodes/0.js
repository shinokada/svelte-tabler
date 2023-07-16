

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b7b7055a.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.8487da62.js","_app/immutable/chunks/stores.eced8689.js","_app/immutable/chunks/singletons.8ac57134.js","_app/immutable/chunks/index.97201a03.js","_app/immutable/chunks/tw-merge.42a77858.js"];
export const stylesheets = ["_app/immutable/assets/0.c40423e1.css"];
export const fonts = [];
