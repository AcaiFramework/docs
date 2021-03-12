// Modules
import useLocalization from "../../../../modules/Localization";

const Views = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.application.views");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("VIEWS")}</h1>
			<p>{_("TEXT_01")}</p>
		</>
	);
};

export default Views;
