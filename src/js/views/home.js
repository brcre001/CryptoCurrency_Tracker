import React, { useContext } from "react";
import { Cards } from "../component/Cards.js";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export const Home = () => {
	// Accessing files from flux to appContext
	const data = useContext(Context);

	return (
		<div className="mt-3">
			<h1>Characters</h1>
			<div className="d-flex row p-3 w-100 justify-content-center">
				{data.store.people.map((item, index) => {
					return <Cards key={index} name={item.name} />;
				})}
			</div>
			<h1>Planets</h1>
			<div className="d-flex row p-3 w-100 justify-content-center">
				{data.store.planets.map((item, index) => {
					return <Cards key={index} name={item.name} />;
				})}
			</div>
			<h1>Vehicles</h1>
			<div className="d-flex row p-3 w-100 justify-content-center">
				{data.store.vehicles.map((item, index) => {
					return <Cards key={index} name={item.name} />;
				})}
			</div>
		</div>
	);
};
