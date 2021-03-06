// Packages
import { Link } 	from "preact-router";

// Modules
import useLocalization from "../../../modules/Localization";

const About = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("about");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class="container">
			<h1>{_("ABOUT")}</h1>

			<p>{_("TEXT_01")}</p>

			<h2>{_("TITLE_01")}</h2>

			<p>{_("TEXT_02")}</p>

			<h2>{_("TITLE_02")}</h2>

			<p>{_("TEXT_03")}</p>
		</div>
	);
};

export default About;
