import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const handleFavorite = favorite => {
		actions.addFavorite(favorite);
	};

	return (
		<nav className="navbar navbar-dark bg-dark sticky-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fab fa-bitcoin" />
					Crypto Tracker
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
			{/* {!store.currentUser ? (
				<Link className="btn btn-primary ml-2" to="/login">
					Login
				</Link>
			) : (
				<button
					className="btn btn-primary ml-2"
					onClick={() => {
						actions.logout();
						history.push("/");
					}}>
					Logout
				</button>
			)} */}
		</nav>
	);
};
