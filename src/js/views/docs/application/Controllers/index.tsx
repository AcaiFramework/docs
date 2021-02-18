// Containers
import Highlight	from "../../../../components/Highlight";
import Navbar 		from "../../../../containers/Navbar";

// Modules
import useLocalization from "../../../../modules/Localization";

const Controllers = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("controllers");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Navbar title={_("CONTROLLERS")}>
			<p>{_("TEXT_01")}</p>

			<Highlight language="typescript">
{`
export default class ResourceController {
	public async register (req: AppRequest) {
		/* ${_("COMMENT")} */

		return "Registered successfully";
	}
}
`}
			</Highlight>

			<p>{_("TEXT_02")}</p>

			<div class="alert alert-primary">{_("TEXT_03")}</div>

			<h3>{_("TITLE_01")}</h3>

			<Highlight language="typescript">
{`
export default {
	register: async (req: AppRequest) => {
		/* ${_("COMMENT")} */

		return "Registered successfully";
	}
}
`}
			</Highlight>

			<h3>{_("TITLE_02")}</h3>

			<Highlight language="typescript">
{`
export default (req: AppRequest) => {
	/* ${_("COMMENT")} */

	return "Registered successfully";
}
`}
			</Highlight>

			<h2>{_("TITLE_03")}</h2>

			<p>{_("TEXT_04")}</p>

			<Highlight language="typescript">
{`
import { response } from "@acai/server";

export default (req: AppRequest) => {
	return response().status(201).data({message: "Registered"});
}
`}
			</Highlight>
		</Navbar>
	);
};

export default Controllers;
