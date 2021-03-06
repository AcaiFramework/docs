// Packages
import { useCallback, useEffect, useState } from "preact/hooks";

// Parts
import context 	from "./context";
import Props 	from "./props";

const Localization = ({ children, language }: Props) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// state
	const [currentlang, setlanguage] = useState(language || navigator.language);

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		setlanguage(language || navigator.language);
	}, [language]);

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const translate = useCallback(
		(category?: string) => {
			console.log(`../../../localization/${currentlang}/${(`${category}` || "index").replaceAll(".", "/")}.json`);
			return import(/* @vite-ignore */ `../../../localization/${currentlang}/${(`${category}` || "index").replaceAll(".", "/")}.json`)
				.then(response => {
					return response.default;
				})
				.catch(error => {
					console.warn(error);
				});
		},
		[currentlang]
	);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<context.Provider value={translate} children={children} />
	);
};

export default Localization;
