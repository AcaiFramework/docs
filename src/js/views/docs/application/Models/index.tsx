// Containers
import Highlight	from "../../../../components/Highlight";
import Sidebar 		from "../../../../containers/Sidebar";

// Modules
import useLocalization from "../../../../modules/Localization";

const Models = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("models");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("MODELS")}</h1>
			<p>{_("TEXT_01")}</p>

			<Highlight language="typescript">
{`
// Packages
import { Model, Field, Table } from "@acai/model";

@Table("data_user")
export default class User extends Model {
	@Field()
	public id: string;

	@Field()
	public username: string;

	@Field()
	public avatar: string;

	@Field()
	public name: string;

	@Field()
	public email: string;
}
`}
			</Highlight>

			<p>{_("TEXT_02")}</p>

			<h5>{_("TITLE_01")}</h5>

			<p>{_("TEXT_03")}</p>

			<h5>{_("TITLE_02")}</h5>

			<p>{_("TEXT_04")}</p>

			<h5>{_("TITLE_03")}</h5>

			<p>{_("TEXT_05")}</p>

			<h3>{_("TITLE_04")}</h3>

			<p>{_("TEXT_06")}</p>

			<Highlight language="typescript">
{`
import User from "../../models/user.model";

// retrieval methods
const user = await User.find("id here"); // get by primary key
await User.first();
await User.last();
await User.paginate(/* current page, start at one */, /* items per page */);
await User.get(); // gets all the users, should be used with the query method call

// instance models
user.fill({field1:1, field2:"data"}); // add multiple fields into the model
user.field1 = 1; // or add them separately
await user.save();
await user.delete();

// query methods
await User.query().where("name", "John").limit(5).orderBy("name", "DESC").get();
`}
			</Highlight>

			<p>{_("TEXT_07")}</p>

			<h3>{_("TITLE_05")}</h3>

			<h5>boolean</h5>

			<p>{_("TYPE_01")}</p>

			<h5>date</h5>

			<p>{_("TYPE_02")}</p>

			<h5>float</h5>

			<p>{_("TYPE_03")}</p>

			<h5>int</h5>

			<p>{_("TYPE_04")}</p>

			<h5>string</h5>

			<p>{_("TYPE_05")}</p>

			<h5>bigInt</h5>

			<p>{_("TYPE_06")}</p>

			<h5>dateTime</h5>

			<p>{_("TYPE_07")}</p>

			<h5>time</h5>

			<p>{_("TYPE_08")}</p>

			<h5>timestamp</h5>

			<p>{_("TYPE_09")}</p>

			<h5>id</h5>

			<p>{_("TYPE_10")}</p>

			<h5>sid</h5>

			<p>{_("TYPE_11")}</p>

			<h5>uuid</h5>

			<p>{_("TYPE_12")}</p>

			<h5>text</h5>

			<p>{_("TYPE_13")}</p>

			<h5>json</h5>

			<p>{_("TYPE_14")}</p>

			<h5>hash</h5>

			<p>{_("TYPE_15")}</p>

			<h3>{_("TITLE_06")}</h3>

			<p>{_("TEXT_08")}</p>

			<Highlight language="typescript">
{`
import { typeManager } from "@acai/model";

typeManager.add("customTypeName", {
	// database type
	type: {
		type: "string",
		length: 15,
	},

	// ${_("COMMENT_01")}
	onCreate: (value: unknown, row: Record<string, unknown>, params?: string[]) => {
		return /* sanitized value */;
	},
	// ${_("COMMENT_02")}
	onSave: (value: unknown, row: Record<string, unknown>, params?: string[]) => {
		return /* sanitized value */;
	},
	// ${_("COMMENT_03")}
	onRetrieve: (value: unknown, row: Record<string, unknown>, params?: string[]) => {
		return /* sanitized value */;
	},
	// ${_("COMMENT_04")}
	onSerialize: (value: unknown, row: Record<string, unknown>, params?: string[]) => {
		return /* sanitized value */;
	},
});
`}
			</Highlight>
		</>
	);
};

export default Models;
