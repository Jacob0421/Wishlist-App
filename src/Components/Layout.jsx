import { Outlet, Link } from "react-router-dom";

const layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/WishLists">Wishlists</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default layout;
