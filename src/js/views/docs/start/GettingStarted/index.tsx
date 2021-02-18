// Containers
import Navbar from "../../../../containers/Navbar";

// Modules
import useLocalization from "../../../../modules/Localization";

// Components
import Highlight from "../../../../components/Highlight";

const Home = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("start");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Navbar title={_("GETTING_STARTED")}>
			<p>{_("INTRODUCTION_01")}</p>

			<Highlight language="javascript">git clone https://github.com/AcaiFramework/application.git</Highlight>

			<p>{_("INTRODUCTION_02")}</p>

			<h3>{_("DIRECTORY")}</h3>

			<Highlight language="javascript">
				- app
					- exceptions
			</Highlight>

			<p>{_("INTRODUCTION_03")}</p>
		</Navbar>
	);
};

export default Home;
