// Packages
import { Link }		from "preact-router";

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
	const _ = useLocalization("links");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div>
			<div class={style.navbar}>
				<div class={`${style.links} nav`}>
					<Link href="/docs/x/getting-started">{_("START")}</Link>
					<h5>{_("APPLICATION")}</h5>
					<Link href="/docs/x/app/controllers">{_("CONTROLLERS")}</Link>
					<Link href="/docs/x/app/exceptions">{_("EXCEPTIONS")}</Link>
					<Link href="/docs/x/app/middlewares">{_("MIDDLEWARES")}</Link>
					<Link href="/docs/x/app/models">{_("MODELS")}</Link>
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

				<div class="container">
					<h1>{props.title}</h1>

					<div class="comein">
						{props.children}
					</div>

				</div>
			</div>
		</div>
	);
};

export default Sidebar;
