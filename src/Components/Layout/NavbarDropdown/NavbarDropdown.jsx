import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	WishlistItems,
	LoggedInItems,
	NotLoggedInItems,
} from "../DropdownData";
import "./NavbarDropdown.css";

export function NavbarDropdown(props) {
	const [isClicked, setIsclicked] = useState(false);
	const dropdownItems = props.dropdownItems;

	const handleClick = () => setIsclicked(!isClicked);

	return (
		<>
			<section>
				<ul
					onClick={handleClick}
					className={
						isClicked ? "dropdown-hidden" : "dropdown-visible"
					}>
					{dropdownItems.map((item, index) => {
						return (
							<li key={index}>
								<Link
									className="dropdown-item"
									to={item.path}
									onClick={handleClick}>
									{item.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
}
