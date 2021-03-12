// Modules
import useLocalization from "../../../modules/Localization";

// Component
import Props from "./props";
import style from "./style.module.scss";

const NotFound = (props: Props) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general.general");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={style.container}>{_("PAGE_NOT_FOUND")}</div>
	);
};

export default NotFound;
