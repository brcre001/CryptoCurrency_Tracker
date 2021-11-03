import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, action } = useContext(Context);
	const params = useParams();

	let data = store.coins.find(item => item.id == params.theid);

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
