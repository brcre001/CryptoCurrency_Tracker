import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const data = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<img />
			<h1 className="display-4">This will show the demo element: General Element</h1>

			<hr className="my-4" />

			<Link to="/">
				<button className="btn btn-primary btn-lg text-center justify-content-center">Back home</button>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
