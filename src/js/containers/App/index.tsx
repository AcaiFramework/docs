// Packages
import Router 		from "preact-router";
import AsyncRoute 	from "preact-async-route";

// Views
import Loading 	from "../../views/general/Loading";
import NotFound from "../../views/general/NotFound";

// Modules
import useLocalization from "../../modules/Localization";

const App = () => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<useLocalization.Provider>
			<Router static>
				<AsyncRoute
					path="/"
					loading={Loading}
					getComponent={() => import("../../views/general/Home").then(module => module.default)}
				/>

				<AsyncRoute
					path="/docs/:version/getting-started"
					loading={Loading}
					getComponent={() => import("../../views/docs/start/GettingStarted").then(module => module.default)}
				/>

				<AsyncRoute
					path="/docs/:version/app/exceptions"
					loading={Loading}
					getComponent={() => import("../../views/docs/application/Exceptions").then(module => module.default)}
				/>

				<NotFound default />
			</Router>
		</useLocalization.Provider>
	);
};

export default App;
