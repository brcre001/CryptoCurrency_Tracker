import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, action } = useContext(Context);
	const params = useParams();

	useEffect(() => dataForPage(params.theid), []);

	let dataForPage = item => {
		console.log(item);
		console.log(store.people);
		let data = store.people.find(element => element.name == item);
		console.log(data);
	};

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.theid}</h1>

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
