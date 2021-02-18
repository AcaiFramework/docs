// Containers
import Highlight	from "../../../../components/Highlight";
import Navbar 		from "../../../../containers/Navbar";

// Modules
import useLocalization from "../../../../modules/Localization";

const Exceptions = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("exceptions");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Navbar title={_("EXCEPTIONS")}>
			<div class="alert alert-primary">{_("TEXT_01")}</div>

			<p>{_("TEXT_02")}</p>

			<Highlight language="typescript">
{`
import { response }		from "@acai/server";
import { CustomException } 	from "@acai/utils";

export default class ModelException extends CustomException {
	public constructor (model, id) {
		this.model	= model;
		this.primaryKey	= id;

		super("modelNotFound", \`Model \${this.model.name} of primary key \${this.primaryKey} not found\`);
	} 

	public render (request: ApplicationRequest) {
		if (request.headers.Accept === "application/json") {
			return response({
				data: {message: this.message},
				status: 404,
			})
		}

		return response({
			data: \`<h1>\${this.message}</h1>\`,
		});
	}
}
`}
			</Highlight>

			<p>{_("TEXT_03")}</p>

			<div class="alert alert-secondary">{_("TEXT_04")}</div>

			<p>{_("TEXT_05")}</p>
		</Navbar>
	);
};

export default Exceptions;
