// Modules
import useLocalization from "../../../modules/Localization";

// Component
import Props from "./props";

const NotFound = (props: Props) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div>{_("PAGE_NOT_FOUND")}</div>
	);
};

export default NotFound;
