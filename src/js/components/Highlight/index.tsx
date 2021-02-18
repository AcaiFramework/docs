// Packages
import highlighter 	from "highlight.js";
import "highlight.js/styles/github.css";

// Component
import style from "./style.module.scss";
import Props from "./props";

const Highlight = (props: Props) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<pre class={style.background}>
			<code
				class={`language-${props.language}`}
				dangerouslySetInnerHTML={{ __html: highlighter.highlight(props.language, props.children).value }}
			/>
		</pre>
	);
};

export default Highlight;
