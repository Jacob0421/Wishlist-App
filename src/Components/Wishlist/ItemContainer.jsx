import React, { useEffect, useState } from "react";
// import { Lists } from "../../Data/Lists";
// import { Items as itemData } from "../../Data/Items";
import Item from "./Item";
import "./ItemContainer.css";

function ItemContainer() {
	const [items, setItems] = useState([]);
	let isInitialized = false;

	useEffect(() => {
		if (!isInitialized) {
			fetchItems();
			isInitialized = true;
		}
	}, []);

	async function fetchItems() {
		// itemData.map((i) => AddItems(i));
		const response = await fetch("http://localhost:5050/Items/");
		let jsonResponse = await response.json();
		console.log(jsonResponse);
		setItems(jsonResponse);
		// setItems(itemData);
	}

	// add to MongoDB
	// async function AddItems(item) {
	// 	const response = await fetch("http://localhost:5050/Items/", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(item),
	// 	});
	// }

	return (
		<div className="div-container">
			<div className="background"></div>
			<div className="ItemContainer">
				{items.map((item) => (
					<Item
						key={item._id}
						id={item._id}
						name={item.Name}
						url={item.URL}
						picture={item.Picture}
						price={item.Price}
					/>
				))}
			</div>
		</div>
	);
}
export default ItemContainer;
