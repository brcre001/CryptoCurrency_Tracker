import React, { useContext } from "react";
import { Cards } from "../component/Cards.js";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export const Home = () => {
	// Accessing files from flux to appContext
	const { store } = useContext(Context);

	return (
		<div className="mt-3 px-5">
			<h1>Characters</h1>
			<div className="d-flex flex-row w-100 overflow-auto">
				{store.people.map((item, index) => {
					return <Cards key={index} name={item.name} />;
				})}
			</div>
			<h1>Planets</h1>
			<div className="d-flex flex-row w-100 overflow-auto">
				{store.planets.map((item, index) => {
					return <Cards key={index} name={item.name} />;
				})}
			</div>
			<h1>Vehicles</h1>
			<div className="d-flex flex-row w-100 overflow-auto">
				{store.vehicles.map((item, index) => {
					return <Cards key={index} name={item.name} />;
				})}
			</div>
		</div>
	);
};
