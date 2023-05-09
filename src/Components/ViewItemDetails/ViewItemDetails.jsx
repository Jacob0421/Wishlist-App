import React from "react";
import { useLocation } from "react-router-dom";
import "./ViewItemDetails.css";

function ViewItemDetails() {
	const location = useLocation();
	const { item } = location.state;

	return (
		<div className="container">
			<h2 className="item-name">{item.name}</h2>
			<div className="item-container">
				<div>
					<p>Price: {item.price}</p>
					<a
						href={item.url}
						target="_blank"
						rel="noreferrer"
						className="item-link">
						<button>Visit Seller</button>
					</a>
					<button>Edit Item</button>
				</div>
				<img src={item.picture} alt={item.name} className="item-img" />
			</div>
		</div>
	);
}

export default ViewItemDetails;
