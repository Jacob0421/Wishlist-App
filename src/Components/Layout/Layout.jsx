import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Wishlists">Wishlists</Link>
					</li>
					<li>
						<Link to="/Users">Users</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Layout;
