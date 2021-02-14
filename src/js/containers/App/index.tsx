// Packages
import { h } from 'preact';
import { useState } from "preact/hooks";

const App = () => {
	const [count, setcount] = useState(0);

	return (
		<div>{count} <button onClick={() => setcount(count + 1)}>+</button></div>
	);
}

export default App;
