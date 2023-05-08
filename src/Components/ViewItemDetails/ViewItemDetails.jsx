import React from "react";
import { useLocation } from "react-router-dom";
import "./ViewItemDetails.css";

function ViewItemDetails() {
	const { state } = useLocation();
	const { name } = state.state;

	return (
		<div>
			<p>{name}</p>
		</div>
	);
}

export default ViewItemDetails;
