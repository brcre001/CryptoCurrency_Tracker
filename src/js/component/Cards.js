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
		<Card style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "30rem" }} className="col-2 m-3 p-0">
			<Card.Img variant="top" src="https://dummyimage.com/400x200" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				{props.type == "people" ? (
					<>
						<Card.Text>Gender: {props.gender}</Card.Text>
						<Card.Text>Hair Color: {props.haircolor}</Card.Text>
						<Card.Text>Eye Color: {props.eyecolor}</Card.Text>
					</>
				) : props.type == "planets" ? (
					<>
						<Card.Text>Climate: {props.climate}</Card.Text>
						<Card.Text>Gravity: {props.gravity}</Card.Text>
						<Card.Text>Terrain: {props.terrain}</Card.Text>
					</>
				) : props.type == "vehicles" ? (
					<>
						<Card.Text>Manufacturer: {props.manufacturer}</Card.Text>
						<Card.Text>Cargo Capacity: {props.cargocapacity}</Card.Text>
						<Card.Text>Model: {props.model}</Card.Text>
					</>
				) : (
					<Card.Text>This {props.type} does not exist!</Card.Text>
				)}
			</Card.Body>
			<Card.Footer className="border-0 bg-white">
				<Link to={`/single/${props.type}/${props.index}`}>
					<Button variant="outline-primary" className="float-left">
						Learn More!
					</Button>
				</Link>
				<Button variant="outline-warning" className="float-right" onClick={() => handleFavorite(props.name)}>
					{found ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
				</Button>
			</Card.Footer>
		</Card>
	);
};

Cards.propTypes = {
	name: PropTypes.string,
	index: PropTypes.number,
	type: PropTypes.string,
	gender: PropTypes.string,
	haircolor: PropTypes.string,
	eyecolor: PropTypes.string,
	climate: PropTypes.string,
	gravity: PropTypes.string,
	terrain: PropTypes.string,
	manufacturer: PropTypes.string,
	cargocapacity: PropTypes.string,
	model: PropTypes.string
};
