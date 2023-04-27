import { React } from "react";
import "./CSS/Item.css";

function Item(props) {
	return (
		<div className="ItemCard">
			<img
				className="ItemPicture"
				src={props.picture}
				alt={props.name}></img>
			<p>
				<strong>{props.name}</strong>
			</p>
			<p>${props.price}</p>
			<a href={props.url} target="_blank" rel="noreferrer">
				<button className="BuyNow">Buy Now!</button>
			</a>
		</div>
	);
}
export default Item;
