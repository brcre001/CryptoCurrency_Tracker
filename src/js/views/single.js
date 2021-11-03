import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, action } = useContext(Context);

	let data = store[params.theid];

	return (
		<div className="jumbotron text-center">
			<h1 className="display-4">{data.name}</h1>

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
