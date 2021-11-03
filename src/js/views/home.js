import React, { useContext } from "react";
import { Cards } from "../component/Cards.js";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export const Home = () => {
	// Accessing files from flux to appContext
	const { store } = useContext(Context);
	console.log(store.coins);
	return (
		<div className="mt-3 px-5">
			<h1>Coins</h1>
			<div className="d-flex w-100 row justify-content-center">
				{store.coins.map((item, index) => {
					return <Cards key={index} coinObj={item} />;
				})}
			</div>
		</div>
	);
};
