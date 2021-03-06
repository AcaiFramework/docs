// Modules
import useLocalization from "../../../modules/Localization";

// Component
import style from "./style.module.scss";

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
		<div class={style.container}>{_("LOADING")}</div>
	);
};

export default Loading;
