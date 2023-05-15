import React, { useEffect, useState } from "react";
import { Users as UserList } from "../../../Data/Users";

function AddUser() {
	const [Users, setUsers] = useState(UserList);
	let isIinitialized = false;

	const handleAdd = () => {
		// Users.map((user) => onUserAdd(user));
	};

	async function onUserAdd(user) {
		// const response = await fetch("http://localhost:5050/Users/", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(user),
		// });
	}

	useEffect(() => {
		if (!isIinitialized) {
			handleAdd();
			isIinitialized = true;
		}
	});

	return <></>;
}

export default AddUser;
