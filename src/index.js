import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import ItemContainer from "./Components/ItemContainer";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className="contentcontainer">
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<App />} />
						<Route path="/Wishlists" element={<ItemContainer />} />
					</Route>
				</Routes>
			</Router>
		</div>
	</React.StrictMode>
);
