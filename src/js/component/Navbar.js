import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleFavorite = favorite => {
		actions.addFavorite(favorite);
	};

	return (
		<nav className="navbar navbar-dark bg-dark sticky-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
						width="50"
						alt="star wars logo"
					/>{" "}
					STARWARS BLOG
				</span>
			</Link>
			<div className="ml-auto">
				<DropdownButton
					align="end"
					title={`Favorites (${store.favorites.length})`}
					id="dropdown-menu-align-right"
					variant="success">
					{store.favorites.map((item, index) => {
						return (
							<Dropdown.Item key={index} eventKey={index}>
								{item}{" "}
								<button onClick={() => handleFavorite(item)} className="btn btn-danger float-right">
									<i className="fas fa-trash-alt" />
								</button>
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
			</div>
		</nav>
	);
};
