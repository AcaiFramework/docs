// Packages
import { Link }		from "preact-router";

// Component
import NavbarPropsInterface from "./props";
import style 				from "./style.module.scss";

// Modules
import useLocalization from "../../modules/Localization";
import Collapse from "../../components/Collapse";

const Navbar = (props: NavbarPropsInterface) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("links");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={style.navbar}>
			<div class={style.links}>
				<Link href="/docs/x/getting-started">{_("START")}</Link>
				<Collapse title={_("MODULES")}>
					<Link href="/docs/x/modules/tester">{_("TESTER")}</Link>
					<Link href="/docs/x/modules/router">{_("ROUTER")}</Link>
					<Link href="/docs/x/modules/config">{_("CONFIG")}</Link>
					<Link href="/docs/x/modules/server">{_("SERVER")}</Link>
					<Link href="/docs/x/modules/query">{_("QUERY")}</Link>
					<Link href="/docs/x/modules/model">{_("MODEL")}</Link>
				</Collapse>
			</div>

			<div class="container">
				<h1>{props.title}</h1>

				{props.children}
			</div>
		</div>
	);
};

export default Navbar;
