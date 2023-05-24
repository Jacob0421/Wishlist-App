import React, { useState } from "react";
import "./Login.css";

export default function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function updateFormData(value) {
		return setFormData((prev) => {
			return { ...prev, ...value };
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const loginDetails = {
			email: formData.email,
			password: formData.password,
		};

		const response = await fetch("http://localhost:5050/Login/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginDetails),
		});

		console.log(response);
	}

	return (
		<div className=" flex center-all col login-container">
			<h1 className="center-all">Login</h1>
			<form
				onSubmit={handleSubmit}
				className="flex col center-all content-container"
			>
				<input
					type="text"
					placeholder="Email Address"
					className="login-input"
					id="email"
					onChange={(e) => updateFormData({ email: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Password"
					className="login-input"
					id="password"
					onChange={(e) =>
						updateFormData({ password: e.target.value })
					}
				/>
				<button type="submit" className="btn-login">
					Login
				</button>
			</form>
		</div>
	);
}
