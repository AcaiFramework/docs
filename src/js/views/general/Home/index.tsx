// Packages
import { Link } 	from "preact-router";

// Modules
import useLocalization from "../../../modules/Localization";

// Component
import style from "./style.module.scss";

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
			<div class={`container ${style.container}`}>
				<div class="row">
					<div class={`col-md-6 ${style.left}`}>
						<h1 class="text-center">{_("TITLE")}</h1>

						<p>{_("SHORT_DESCRIPTION")}</p>
					</div>
					<div class={`col-md-6 ${style.right}`}>
						<Link class="btn btn-primary" href="/docs/x/getting-started">{_("GETTING_STARTED")}</Link>
					</div>
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
