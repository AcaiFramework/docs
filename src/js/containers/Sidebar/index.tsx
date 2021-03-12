// Packages
import { Link } from "preact-router";

// Component
import NavbarPropsInterface from "./props";
import style 				from "./style.module.scss";

// Modules
import useLocalization from "../../modules/Localization";

// Components
import Collapse from "../../components/Collapse";

const Sidebar = (props: NavbarPropsInterface) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general.links");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div style={{marginBottom: "15vh"}}>
			<div class={style.navbar}>
				<div class="container">
					<div class={`${style.links} nav col-md-2`}>
						<Link href="/docs/x/getting-started">{_("START")}</Link>
						<h5>{_("APPLICATION")}</h5>
						<Link href="/docs/x/app/controllers">{_("CONTROLLERS")}</Link>
						<Link href="/docs/x/app/exceptions">{_("EXCEPTIONS")}</Link>
						<Link href="/docs/x/app/middlewares">{_("MIDDLEWARES")}</Link>
						<Collapse title={_("MODELS")}>
							<Link href="/docs/x/app/models">{_("INTRODUCTION")}</Link>
							<Link href="/docs/x/app/models/types">{_("TYPES")}</Link>
							<Link href="/docs/x/app/models/relationships">{_("RELATIONSHIPS")}</Link>
						</Collapse>
						<Link href="/docs/x/app/presenters">{_("PRESENTERS")}</Link>
						<Link href="/docs/x/app/providers">{_("PROVIDERS")}</Link>
						<Link href="/docs/x/app/validators">{_("VALIDATORS")}</Link>
						<Link href="/docs/x/app/views">{_("VIEWS")}</Link>
						<Collapse title={_("MODULES")}>
							<Link href="/docs/x/modules/tester">{_("TESTER")}</Link>
							<Link href="/docs/x/modules/router">{_("ROUTER")}</Link>
							<Link href="/docs/x/modules/config">{_("CONFIG")}</Link>
							<Link href="/docs/x/modules/server">{_("SERVER")}</Link>
							<Link href="/docs/x/modules/query">{_("QUERY")}</Link>
						</Collapse>
					</div>

					<div class="comein col-md-10">
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
