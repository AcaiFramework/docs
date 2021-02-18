// Packages
import { Link } 	from "preact-router";

// Modules
import useLocalization from "../../../modules/Localization";

const Home = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("home");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<div class="container">
				<h1 class="text-center mt-5">Açaí Framework</h1>

				<p>{_("SHORT_DESCRIPTION")}</p>

				<div class="col-md-2 offset-md-5 pt-5">
					<Link class="btn btn-primary col-12" href="/docs/x/getting-started"><i class="fa fa-trash" />{_("GETTING_STARTED")}</Link>
				</div>
			</div>

			<div>
				<div class="container">
					<h2>{_("ABOUT")}</h2>

					<p>{_("DESCRIPTION")}</p>
				</div>
			</div>

			<div>
				<div class="container">
					<h2>{_("FEATURES")}</h2>

					<p>{_("FEATURES_DESCRIPTION")}</p>
				</div>
			</div>
		</>
	);
};

export default Home;
