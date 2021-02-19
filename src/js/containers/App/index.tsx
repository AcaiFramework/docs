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
		<useLocalization.Provider language="en-EN">
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

				<AsyncRoute
					path="/docs/:version/app/controllers"
					loading={Loading}
					getComponent={() => import("../../views/docs/application/Controllers").then(module => module.default)}
				/>

				<AsyncRoute
					path="/docs/:version/app/middlewares"
					loading={Loading}
					getComponent={() => import("../../views/docs/application/Middlewares").then(module => module.default)}
				/>

				<AsyncRoute
					path="/docs/:version/app/models"
					loading={Loading}
					getComponent={() => import("../../views/docs/application/Models").then(module => module.default)}
				/>

				<AsyncRoute
					path="/docs/:version/app/presenters"
					loading={Loading}
					getComponent={() => import("../../views/docs/application/Presenters").then(module => module.default)}
				/>

				<AsyncRoute
					path="/docs/:version/app/providers"
					loading={Loading}
					getComponent={() => import("../../views/docs/application/Providers").then(module => module.default)}
				/>

				<AsyncRoute
					path="/docs/:version/app/validators"
					loading={Loading}
					getComponent={() => import("../../views/docs/application/Validators").then(module => module.default)}
				/>

				<AsyncRoute
					path="/docs/:version/app/views"
					loading={Loading}
					getComponent={() => import("../../views/docs/application/Views").then(module => module.default)}
				/>

				<AsyncRoute
					path="/docs/:version/modules/tester"
					loading={Loading}
					getComponent={() => import("../../views/docs/modules/Tester").then(module => module.default)}
				/>

				<AsyncRoute
					path="/docs/:version/modules/router"
					loading={Loading}
					getComponent={() => import("../../views/docs/modules/Router").then(module => module.default)}
				/>

				<NotFound default />
			</Router>
		</useLocalization.Provider>
	);
};

export default App;
