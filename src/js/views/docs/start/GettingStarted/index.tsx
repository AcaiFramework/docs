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

			<div class="card mb-4">
				<ul>
					<li>
						app
						<ul>
							<li>exceptions</li>
							<li>
								controllers
								<ul>
									<li>http</li>
								</ul>
							</li>
							<li>models</li>
							<li>presenters</li>
							<li>providers</li>
							<li>validators</li>
							<li>views</li>
						</ul>
					</li>
					<li>config</li>
					<li>interfaces</li>
					<li>routes</li>
				</ul>
			</div>

			<p>{_("INTRODUCTION_03")}</p>

			<p>{_("INTRODUCTION_04")}</p>

			<div class="alert alert-primary">{_("INTRODUCTION_05")}</div>
		</Navbar>
	);
};

export default Home;
