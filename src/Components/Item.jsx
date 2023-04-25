import { React } from "react";
import "./CSS/Item.css";

function Item(props) {
	return (
		<div class="ItemCard">
			<img class="ItemPicture" src={props.picture} alt={props.name}></img>
			<p>
				Title: <strong>{props.name}</strong>
			</p>
			<p>${props.price}</p>
			<a href={props.url} target="_blank" rel="noreferrer">
				<button>Buy Now!</button>
			</a>
		</div>
	);
}
export default Item;
