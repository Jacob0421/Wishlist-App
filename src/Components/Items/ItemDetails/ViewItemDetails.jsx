import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
// import {Alert} from reactalert;
import "./ViewItemDetails.css";

function ViewItemDetails() {
	const navigate = useNavigate();
	const location = useLocation();
	const { item } = location.state;

	const confirmDelete = () => {
		let result = window.confirm(`Would you like to delete ${item.name}?`);
		console.log(result);
		if (result) {
			handleDelete();
		} else {
		}
	};

	async function handleDelete() {
		const response = await fetch(`http://localhost:5050/Items/${item.id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});

		navigate("/Wishlists");
	}

	return (
		<div className="container">
			<Link to={"/Wishlists"}>Back</Link>
			<h2 className="item-name">{item.name}</h2>
			<div className="item-container">
				<p>Price: {item.price}</p>
				<div>
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
					<button onClick={confirmDelete}>Delete</button>
				</div>
				<img src={item.picture} alt={item.name} className="item-img" />
			</div>
		</div>
	);
}

export default ViewItemDetails;
