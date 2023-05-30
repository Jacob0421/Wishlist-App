import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemContainer.css";

function ItemContainer() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchItems();
	}, []);

	async function fetchItems() {
		const response = await fetch("http://localhost:5050/Items/");
		let jsonResponse = await response.json();
		console.log(jsonResponse);
		setItems(jsonResponse);
	}

	return (
		<div className="ItemContainer flex row center-container-hor">
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
	);
}
export default ItemContainer;
