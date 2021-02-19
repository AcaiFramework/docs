// Containers
import Navbar 		from "../../../../containers/Navbar";

// Modules
import useLocalization from "../../../../modules/Localization";

const Views = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("views");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Navbar title={_("VIEWS")}>
			<p>{_("TEXT_01")}</p>
		</Navbar>
	);
};

export default Views;
