export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	options: {
		storySort: {
			order: [
				"Introduction",
				"Modules",
					[
						"Testing",
							["Introduction", "Assertions"]
					]
			]
		}
	}
}