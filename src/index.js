import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import ItemContainer from "./Components/Items/ItemContainer/ItemContainer";
import ViewItemDetails from "./Components/Items/ItemDetails/ViewItemDetails";
import EditItem from "./Components/Items/EditItem/EditItem";
import Login from "./Components/Login/Login";
import AddUser from "./Components/Users/AddUser/AddUser";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/Login" element={<Login />} />
					<Route path="/Wishlists" element={<ItemContainer />} />
					<Route
						exact
						path="/Item/:id"
						element={<ViewItemDetails />}
					/>
					<Route exact path="/Item/Edit/:id" element={<EditItem />} />
					<Route path="/Users" element={<AddUser />} />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
