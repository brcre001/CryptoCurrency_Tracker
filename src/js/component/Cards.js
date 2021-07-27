import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import { Context } from "../store/appContext.js";

export const Cards = props => {
	const [found, setFound] = useState(false);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		let position = store.favorites.find(item => item == props.name);
		if (position) {
			setFound(true);
		} else {
			setFound(false);
		}
	});

	const handleFavorite = favorite => {
		actions.addFavorite(favorite);
	};

	return (
		<Card style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }} className="col-2 m-3 p-0">
			<Card.Img variant="top" src="https://dummyimage.com/400x200" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>This is a starwars object</Card.Text>
				<Link to={`/single/people/${props.name}`}>
					<Button variant="outline-primary" className="float-left">
						Learn More!
					</Button>
				</Link>
				<Button variant="outline-warning" className="float-right" onClick={() => handleFavorite(props.name)}>
					{found ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
				</Button>
			</Card.Body>
		</Card>
	);
};

Cards.propTypes = {
	name: PropTypes.string
};
