export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","css/vue.css","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/tabler-optimized-650-1050.png","images/tabler-optimized.png","images/tabler.png","maskable_icon_x192.png","styles/docs.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.cfac3cf8.js","app":"_app/immutable/entry/app.82d846bc.js","imports":["_app/immutable/entry/start.cfac3cf8.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/singletons.8ac57134.js","_app/immutable/chunks/index.97201a03.js","_app/immutable/entry/app.82d846bc.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.8487da62.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/icons",
				pattern: /^\/icons\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
