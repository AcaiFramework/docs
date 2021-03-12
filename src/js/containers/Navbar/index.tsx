// Packages
import { Link }			from "preact-router";
import { Scrollbars } 	from "preact-custom-scrollbars";

// Component
import NavbarPropsInterface from "./props";
import style 				from "./style.module.scss";

// Modules
import useLocalization from "../../modules/Localization";

// Image
import logo from "../../../img/logo.svg";
import Wave from "../../components/Wave";

const Navbar = (props: NavbarPropsInterface) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("general.links");

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div>
			<Scrollbars class={style.scrollbar}>
				<nav class="navbar navbar-light p-0 py-2">
					<div class="container">
						<Link class="navbar-brand primary" href="/">
							<img src={logo} width="30" height="30" class="d-inline-block align-top me-2" alt="Açaí framework logo" />
							Açaí.js
						</Link>

						<div class={style.links}>
							<Link href="/">{_("HOME")}</Link>
							<Link href="/about">{_("ABOUT")}</Link>
							<Link href="/docs/x/getting-started">{_("DOC")}</Link>
							<Link href="/roadmap">{_("ROADMAP")}</Link>
							<Link href="/contact">{_("CONTACT")}</Link>
						</div>
					</div>
				</nav>
				
				<div class="comein" style={{minHeight:"80vh", marginBottom: "-15vh"}}>
					{props.children}
				</div>

				<Wave margin={0} color="white" />

				<div class="d-flex flex-column justify-content-center align-items-center bg-white">
					<img src={logo} width="30" height="30" class="d-inline-block align-top mt-5" alt="Açaí framework logo" />
					<footer class="text-center py-4">{_("CREATED_BY")}</footer>
				</div>
			</Scrollbars>
		</div>
	);
};

export default Navbar;
