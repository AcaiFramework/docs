// Packages
import { useEffect }	from "preact/hooks";
import { Link } 		from "preact-router";

// Modules
import useLocalization from "../../../modules/Localization";

// Component
import style 					from "./style.module.scss";
import calculateTotalDownloads 	from "../../../utils/downloads";

// Components
import Wave from "../../../components/Wave";

const Home = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general.home");

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		async function calculate () {
			const d = await calculateTotalDownloads();

			function increaseCount () {
				const el = document.getElementById("download-count");
				if (el) {
					const last = parseInt(el.innerHTML);

					if (last !== d) {
						if (d - last > 1000)
							el.innerHTML = `${last + 512}`;
						if (d - last > 100)
							el.innerHTML = `${last + 52}`;
						else
							el.innerHTML = `${last + 1}`;

						setTimeout(increaseCount, (1 / (d - last)) * 900 );
					}
				}
			}

			setTimeout(increaseCount, 10);
			setTimeout(calculate, 60000);
		}

		calculate();
	}, []);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<div class={`container ${style.container}`}>
				<div class="row">
					<div class={`col-md-6 ${style.left}`}>
						<h1 class="text-center mb-4">{_("TITLE")}</h1>

						<p>{_("SHORT_DESCRIPTION")}</p>
					</div>
					<div class={`col-md-6 ${style.right}`}>
						<Link class="btn btn-primary" href="/docs/x/getting-started">{_("GETTING_STARTED")}</Link>
					</div>
				</div>
			</div>

			<Wave />

			<div class="bg-primary text-white py-5">
				<div class="container pb-5 mb-5">
					<div class="text-center">
						<h2 style={{fontWeight:"bold"}} id="download-count">0</h2>
						<h3>{_("DOWNLOADS")}</h3>
					</div>

					<div class="my-5">
						<h2>{_("ABOUT")}</h2>

						<p>{_("DESCRIPTION")}</p>
					</div>

					<div class="my-5">
						<h2>{_("FEATURES")}</h2>

						<p>{_("FEATURES_DESCRIPTION")}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
