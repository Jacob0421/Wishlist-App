import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import App from "./Components/App/App";
import ItemContainer from "./Components/Wishlist/ItemContainer";
import ViewItemDetails from "./Components/ViewItemDetails/ViewItemDetails";
import EditItem from "./Components/EditItem/EditItem";
import Login from "./Components/Login/Login";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<App />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Wishlists" element={<ItemContainer />} />
					<Route
						exact
						path="/ViewItemDetails/:id"
						element={<ViewItemDetails />}
					/>
					<Route exact path="/EditItem/:id" element={<EditItem />} />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
