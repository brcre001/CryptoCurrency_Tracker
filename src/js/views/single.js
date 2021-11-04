import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, action } = useContext(Context);
	const params = useParams();

	let data = store.coins.find(item => item.id == params.theid);

	console.log(data.msupply);

	return (
		<div className="d-flex justify-content-center">
			<div className="bg-white p-3 m-3 rounded">
				<h1 className="display-4 text-primary">{data.name}</h1>
				<hr className="my-4" />
				<div className="justify-content-left">
					<p>Symbol: {data.symbol}</p>
					<p>Price: ${data.price_usd}</p>
					<p>Rank: {data.rank}</p>
					<br />
					<p>Percent Change (in last 1h): {data.percent_change_1h}</p>
					<p>Percent Change (in last 24h): {data.percent_change_24h}</p>
					<p>Percent Change (in last 7d): {data.percent_change_7d}</p>
					<br />
					<p>Current Supply: {data.tsupply}</p>
					<p>Max Supply: {data.msupply == "" ? "N/A" : data.msupply}</p>
				</div>
				<Link to="/">
					<button className="btn btn-primary btn-lg">Back home</button>
				</Link>
			</div>
		</div>
	);
};
