import { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./CSS/Layout.css";

function Layout() {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				rootMargin: "-300px",
			}
		);
		console.log(isIntersecting);
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
		<>
			<nav ref={ref}>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Wishlists">Wishlists</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default Layout;
