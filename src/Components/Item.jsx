import { React } from "react";
import "./CSS/Item.css";

function Item(props) {
	return (
		<div className="ItemCard">
			<img
				className="ItemPicture"
				src={props.picture}
				alt={props.name}></img>
			<p className="ItemName">{props.name}</p>
			<p className="ItemPrice">
				<strong>${props.price}</strong>
			</p>
			<a
				className="BuyNow-link"
				href={props.url}
				target="_blank"
				rel="noreferrer">
				<button className="BuyNow">Buy Now!</button>
			</a>
		</div>
	);
}
export default Item;
