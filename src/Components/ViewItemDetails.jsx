import React from "react";
import { useLocation, Link } from "react-router-dom";

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
