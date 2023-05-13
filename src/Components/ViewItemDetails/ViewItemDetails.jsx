import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ViewItemDetails.css";

function ViewItemDetails() {
	const location = useLocation();
	const { item } = location.state;

	return (
		<div className="container">
			<Link to={"/Wishlists"}>Back</Link>
			<h2 className="item-name">{item.name}</h2>
			<div className="item-container">
				<div>
					<p>Price: {item.price}</p>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="item-link"
					>
						<button>Visit Seller</button>
					</a>
					<Link
						to={`/Item/Edit/${item.id}`}
						state={{
							item: item,
							from: location.pathname,
						}}
					>
						<button>Edit Item</button>
					</Link>
				</div>
				<img src={item.picture} alt={item.name} className="item-img" />
			</div>
		</div>
	);
}

export default ViewItemDetails;
