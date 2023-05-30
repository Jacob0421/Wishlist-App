import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { NavbarDropdown } from "./NavbarDropdown/NavbarDropdown";
import { ChevronDown } from "react-feather";
import { WishlistItems, LoggedInItems, NotLoggedInItems } from "./DropdownData";

function Layout() {
	const [dropdown, setDropdown] = useState(false);

	const onMouseEnter = () => {
		setDropdown(true);
	};

	const onMouseLeave = () => {
		setDropdown(false);
	};

	return (
		<>
			<nav className="navbar">
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
					<li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
						<Link>
							Wishlists
							<ChevronDown style={{ maxHeight: "16px" }} />
							{dropdown && (
								<NavbarDropdown dropdownItems={WishlistItems} />
							)}
						</Link>
					</li>
				</ul>
				<ul id="right-nav">
					<li>
						<Link to="/Login">Login</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Layout;
