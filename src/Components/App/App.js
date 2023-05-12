import logo from "../../img/logo.svg";
import "./App.css";
import DivEffectContainer from "../DivEffect/DivEffectContainer";
import Login from "../Login/Login";
import React, { useState } from "react";

function App() {
	const [token, setToken] = useState();

	if (!token) {
		//Password can be passed as plaintext
		return <Login setToken={setToken} />;
	}

	return (
		<div className="App">
			<DivEffectContainer />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
