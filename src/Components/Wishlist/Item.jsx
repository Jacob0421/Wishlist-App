import { React, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current.style.opacity === 0) {
			ref.current.style.opacity = 1;
		}
	});

	return (
		<>
			<div
				className="ItemCard"
				style={{
					animationName: "slideIn",
					animationDelay: 0.4 * Math.random(10) + "s",
					animationTimingFunction: "ease",
					animationDuration: "1s",
					animationFillMode: "forwards",
				}}
				ref={ref}>
				<Link
					to={`/ViewItemDetails/${props.id}`}
					state={{ item: props }}
					className="fill-parent"></Link>
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
		</>
	);
}
export default Item;
