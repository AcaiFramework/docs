// Packages
import { Link } 	from "preact-router";

// Modules
import useLocalization from "../../../modules/Localization";

const Roadmap = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general.roadmap");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class="container">
			<h1>{_("ROADMAP")}</h1>

			<p>{_("TEXT_01")}</p>
		</div>
	);
};

export default Roadmap;
