import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	// useEffect(() => {
	// 	actions.loadAssets();
	// }, []);

	let data = store.coins.find(item => item.id == params.theid);
	console.log("This is the data: ", data);

	return (
		<div className="d-flex justify-content-center">
			<div className="bg-secondary p-3 m-3 rounded col-11 col-lg-8 col-md-10">
				<div className="d-flex justify-content-center">
					<h1 className="display-4 gold align-self-center">{data.name}</h1>
				</div>
				<hr className="my-4" />
				<div className="justify-content-left text-white px-4">
					<p>Symbol: {data.symbol}</p>
					<p>Current Price: ${data.price_usd}</p>
					<p>Rank: {data.rank}</p>
					<br />
					<p>
						Percent Change (in last 1h):{" "}
						<span className={data.percent_change_1h.includes("-") ? "text-danger" : "text-success"}>
							{data.percent_change_1h}
						</span>
					</p>
					<p>
						Percent Change (in last 24h):{" "}
						<span className={data.percent_change_24h.includes("-") ? "text-danger" : "text-success"}>
							{data.percent_change_24h}
						</span>
					</p>
					<p>
						Percent Change (in last 7d):{" "}
						<span className={data.percent_change_7d.includes("-") ? "text-danger" : "text-success"}>
							{data.percent_change_7d}
						</span>
					</p>
					<br />
					<p>Current Supply: {data.tsupply}</p>
					<p>Max Supply: {data.msupply == "" ? "N/A" : data.msupply}</p>
				</div>
				<div className="d-flex justify-content-center">
					<Link to="/">
						<button className="btn btn-primary btn-lg">Back home</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
