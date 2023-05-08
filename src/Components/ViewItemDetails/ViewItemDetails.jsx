import React from "react";
import { useLocation } from "react-router-dom";
import "./ViewItemDetails.css";

function ViewItemDetails() {
	const location = useLocation();
	const { item } = location.state;

	return (
		<div>
			<p>{item.name}</p>
			<p>{item.price}</p>
			<img src={item.picture} alt={item.name}></img>
			<p>{item.url}</p>
		</div>
	);
}

export default ViewItemDetails;
