import React, { useContext } from "react";
import { Cards } from "../component/Cards.js";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export const Home = () => {
	// Accessing files from flux to appContext
	const data = useContext(Context);
	console.log(data);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="d-flex row p-3" />
			<h1>Planets</h1>
			<div>
				<Cards />
			</div>
			<h1>Vehicles</h1>
			<div>
				<Cards />
			</div>
		</div>
	);
};
