/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: "/",
		src: "/dist"
	},
	plugins: [
		"@prefresh/snowpack",
		"@snowpack/plugin-sass",
		[
			"@snowpack/plugin-run-script", {
				cmd: "eslint src --ext .js,.jsx,.ts,.tsx",
				watch: "esw -w --clear src --ext .js,.jsx,.ts,.tsx"
			}
		]
	],
	routes: [

		/* Enable an SPA Fallback in development: */
		{ match: "routes", src: ".*", dest: "/index.html" }
	],
	optimize: {

		/* Example: Bundle your final build: */
		// "bundle": true,
	},
	packageOptions: {

		/* ... */
	},
	devOptions: {

		/* ... */
	},
	buildOptions: {

		/* ... */
	}
};
