import { React, useState } from "react";
import DivEffect from "./DivEffect";
import "./CSS/DivEffectContainer.css";

function DivEffectContainer() {
	const [divCount] = useState(3);

	let divs = [];
	for (let i = 0; i < divCount; i++) {
		divs.push(<DivEffect key={i} delay={i * 200} />);
	}

	return <div className="flex-container">{divs}</div>;
}

export default DivEffectContainer;
