// Packages
import { useState } from "preact/hooks";

// Component
import style 					from "./style.module.scss";
import CollapsePropsInterface 	from "./props";

const Collapse = (props: CollapsePropsInterface) => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [open, setopen] = useState(false);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={`${style.collapse} ${open ? style.open:""}`}>
			<button class={style.toggle} onClick={() => setopen(!open)}><i class={`fa fa-chevron-${open ? "up":"down"}`} />{props.title}</button>
			<div class={style.list}>
				{props.children}
			</div>
		</div>
	);
};

export default Collapse;
