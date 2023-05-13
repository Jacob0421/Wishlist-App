import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./EditItem.css";

function EditItem() {
	const location = useLocation();
	const { item } = location.state;
	const { from } = location.state;

	const [form, setForm] = useState({
		name: item.name,
		url: item.url,
		imgURL: item.picture,
		price: item.price,
	});

	const navigate = useNavigate();

	function updateForm(value) {
		return setForm((prev) => {
			return { ...prev, ...value };
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const editedItem = {
			name: form.name,
			url: form.url,
			imgURL: form.imgURL,
			price: form.price,
		};
		const response = await fetch(
			`http://localhost:5050/Items/${item.id}/`,
			{
				method: "PATCH",
				body: JSON.stringify(editedItem),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		navigate("/Wishlists");
	}

	return (
		<div className="container">
			<Link to={from} state={{ item: item }}>
				Back
			</Link>
			<form onSubmit={handleSubmit}>
				<label>
					Item Name:
					<input
						type="text"
						id="name"
						value={form.name}
						onChange={(e) => updateForm({ name: e.target.value })}
					/>
				</label>
				<label htmlFor="url">
					Item URL:
					<input
						type="text"
						id="url"
						value={form.url}
						onChange={(e) => updateForm({ url: e.target.value })}
					/>
				</label>
				<label htmlFor="imgURL">
					Item Picture URL:
					<input
						type="text"
						id="imgURL"
						placeholder={form.imgURL}
						onChange={(e) => updateForm({ imgURL: e.target.value })}
					/>
				</label>
				<figure>
					<img src={form.imgURL} alt={form.name} />
					<figcaption>Image Preview</figcaption>
				</figure>
				<label htmlFor="price">
					Item Price:
					<input
						type="text"
						id="price"
						value={form.price}
						onChange={(e) => updateForm({ price: e.target.value })}
					/>
				</label>
				<input type="submit" value="Update" />
			</form>
		</div>
	);
}

export default EditItem;
