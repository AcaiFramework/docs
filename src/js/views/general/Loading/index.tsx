// Modules
import useLocalization from "../../../modules/Localization";

const Loading = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div>{_("LOADING")}</div>
	);
};

export default Loading;
