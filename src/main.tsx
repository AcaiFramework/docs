// Packages
import { render } from "preact";

// Containers
import App from "./js/containers/App";

// -------------------------------------------------
// Styles
// -------------------------------------------------

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./style/overwrite.scss";

// -------------------------------------------------
// Render
// -------------------------------------------------

render(<App />, document.getElementById('app')!);
