import React, { useState } from "react";
import "./AddItem.css";
import { useNavigate } from "react-router-dom";

export function AddItem() {
	const [formData, setFormData] = useState({
		Name: "",
		URL: "",
		Picture: "",
		Price: 0.0,
	});

	const navigate = useNavigate();

	function updateFormData(value) {
		return setFormData((prev) => {
			return { ...prev, ...value };
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const itemDetails = {
			Name: formData.Name,
			URL: formData.URL,
			Picture: formData.Picture,
			Price: formData.Price,
		};

		fetch("http://localhost:5050/Items/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(itemDetails),
		}).then((result) => {
			if (result.ok) {
				navigate("/Wishlists");
			}
		});
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="content-container flex col center-all">
			<label>
				Item Name:
				<input
					type="text"
					id="Name"
					required
					onChange={(e) => updateFormData({ Name: e.target.value })}
				/>
			</label>

			<label>
				Item URL:
				<input
					type="url"
					id="URL"
					required
					onChange={(e) => updateFormData({ URL: e.target.value })}
				/>
			</label>

			<label>
				Picture URL:
				<input
					type="url"
					id="Picture"
					placeholder="https//google.com"
					onChange={(e) =>
						updateFormData({ Picture: e.target.value })
					}
				/>
			</label>

			<label>
				Item Price:
				<input
					type="number"
					id="Price"
					min={0.0}
					step="0.01"
					placeholder="00.00"
					required
					onChange={(e) => updateFormData({ Price: e.target.value })}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}
