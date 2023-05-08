import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import App from "./Components/App/App";
import ItemContainer from "./Components/Wishlist/ItemContainer";
import ViewItemDetails from "./Components/ViewItemDetails/ViewItemDetails";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<App />} />
					<Route path="/Wishlists" element={<ItemContainer />} />
					<Route
						exact
						path="/ViewItemDetails/:id"
						component={ViewItemDetails}
					/>
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
