// Packages
import { useContext, useEffect, useState } from "preact/hooks";

// Parts
import Component 	from "./component";
import context 		from "./context";

const useLocalization 		= (category?: string) => {
	const _ 				= useContext(context);
	const [keys, setkeys] 	= useState({});

	useEffect(() => {
		_(category).then(setkeys);
	}, [_, category]);

	return (key: string, defaultValue?: string) => (keys || {})[key] || defaultValue;
};

useLocalization.Provider 	= Component;

export default useLocalization;