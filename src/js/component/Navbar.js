import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark sticky-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">STARWARS</span>
			</Link>
			<div className="ml-auto">
				<DropdownButton align="end" title="Favorites" id="dropdown-menu-align-right" variant="warning">
					{store.favorites.map((item, index) => {
						return (
							<Dropdown.Item key={index} eventKey={index}>
								{item}
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
			</div>
		</nav>
	);
};
