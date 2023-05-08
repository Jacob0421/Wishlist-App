import { useState, useRef, useEffect } from "react";
import "./DivEffect.css";

function DivEffect(props) {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				rootMargin: "-200px",
			}
		);
		observer.observe(ref.current);
		return () => observer.disconnect;
	}, [isIntersecting]);

	useEffect(() => {
		if (isIntersecting) {
			ref.current.classList.remove("fade-out");
		} else {
			ref.current.classList.add("fade-out");
		}
	});

	return (
		<div
			className="primary"
			ref={ref}
			style={{ transitionDelay: props.delay + "ms" }}>
			This is my test div
		</div>
	);
}

export default DivEffect;
