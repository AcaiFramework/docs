// Components
import Wave from "../../../components/Wave";

// Modules
import useLocalization from "../../../modules/Localization";

const About = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general.about");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<Wave margin={0} />
			<div class="bg-primary text-white" style={{paddingBottom:"15vh"}}>
				<div class="container py-5">
					<h1>{_("ABOUT")}</h1>

					<p>{_("TEXT_01")}</p>

					<h2 class="mt-5">{_("TITLE_01")}</h2>

					<p>{_("TEXT_02")}</p>

					<h2 class="mt-5">{_("TITLE_02")}</h2>

					<p>{_("TEXT_03")}</p>

				</div>
			</div>

		</>
	);
};

export default About;
