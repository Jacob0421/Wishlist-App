import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { NavbarDropdown } from "./NavbarDropdown/NavbarDropdown";
import { ChevronDown } from "react-feather";
import { WishlistItems, LoggedInItems, NotLoggedInItems } from "./DropdownData";

function Layout() {
	const [wishListDropdown, setWishlistDropdown] = useState(false);
	const [loginDropdown, setLoginDropdown] = useState(false);

	const onLoginMouseEnter = () => {
		setLoginDropdown(true);
	};

	const onLoginMouseLeave = () => {
		setLoginDropdown(false);
	};

	const onWishlistMouseEnter = () => {
		setWishlistDropdown(true);
	};

	const onWishlistMouseLeave = () => {
		setWishlistDropdown(false);
	};

	return (
		<>
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Users">Users</Link>
					</li>
					<li
						onMouseEnter={onWishlistMouseEnter}
						onMouseLeave={onWishlistMouseLeave}>
						<Link>
							Wishlists
							<ChevronDown style={{ maxHeight: "16px" }} />
							{wishListDropdown && (
								<NavbarDropdown dropdownItems={WishlistItems} />
							)}
						</Link>
					</li>
				</ul>
				<ul id="right-nav">
					<li
						onMouseEnter={onLoginMouseEnter}
						onMouseLeave={onLoginMouseLeave}>
						<Link>
							Login
							<ChevronDown style={{ maxHeight: "16px" }} />
							{loginDropdown && (
								<NavbarDropdown
									dropdownItems={NotLoggedInItems}
								/>
							)}
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Layout;
