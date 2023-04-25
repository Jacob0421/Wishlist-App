import { React, useEffect, useState } from "react";
import Item from "./Item";
import { ListItems } from "../Data/ListItems";
import { Items as itemData } from "../Data/Items";
import "./CSS/ItemContainer.css";

function ItemContainer() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchItems();
	}, [items]);

	const fetchItems = () => {
		setItems(
			ListItems.reduce((returnedItems, li) => {
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
		<div>
			<div class="ItemContainer">
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
