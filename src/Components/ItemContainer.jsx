import { React, useEffect, useState } from "react";
import Item from "./Item";
import { Lists } from "../Data/Lists";
import { Items as itemData } from "../Data/Items";
import "./CSS/ItemContainer.css";

function ItemContainer() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = () => {
		setItems(
			Lists.reduce((returnedItems, li) => {
				if (li.ListId === 6) {
					returnedItems.push(
						itemData.find((i) => i.ItemId === li.ItemId)
					);
				}
				return returnedItems.sort((a, b) => a.ItemId - b.ItemId);
			}, [])
		);
	};

	return (
		<div className="div-container">
			<div className="background"></div>
			<div className="ItemContainer">
				{items.map((item) => (
					<Item
						key={item.ItemId}
						name={item.ItemName}
						url={item.ItemURL}
						picture={item.ItemPicture}
						price={item.ItemPrice}
					/>
				))}
			</div>
		</div>
	);
}
export default ItemContainer;
