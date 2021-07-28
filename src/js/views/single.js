import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, action } = useContext(Context);
	const params = useParams();

	let data = store[params.type][params.theid];

	return (
		<div className="jumbotron text-center">
			<h1 className="display-4">{data.name}</h1>
			{params.type == "people" ? (
				<div>
					<h3>Gender: {data.gender}</h3>
					<h3>Hair Color: {data.hair_color}</h3>
					<h3>Eye Color: {data.eye_color}</h3>
				</div>
			) : params.type == "planets" ? (
				<div>
					<h3>Climate: {data.climate}</h3>
					<h3>Gravity: {data.gravity}</h3>
					<h3>Terrain: {data.terrain}</h3>
				</div>
			) : params.type == "vehicles" ? (
				<div>
					<h3>Manufacturer: {data.manufacturer}</h3>
					<h3>Cargo Capacity: {data.cargo_capacity}</h3>
					<h3>Model: {data.model}</h3>
				</div>
			) : (
				<h3>This {data.type} does not exist</h3>
			)}

			<hr className="my-4" />
			<Link to="/">
				<button className="btn btn-primary btn-lg">Back home</button>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
