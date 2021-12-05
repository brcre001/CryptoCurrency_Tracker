import React, { useContext, useEffect, useState } from "react";
import { Cards } from "../component/Cards.js";
import Alert from "react-bootstrap/Alert";
import { Context } from "../store/appContext.js";
import queryString from "query-string";
import "../../styles/home.scss";

export const Home = () => {
	// Accessing files from flux to appContext
	const { store } = useContext(Context);
	const [coinsArray, setCoinsArray] = useState(store.coins);

	useEffect(
		() => {
			const qs = queryString.parse(location.hash);
			searchFunction(qs.keyword);
		},
		[store.coins]
	);

	const searchFunction = keyword => {
		let filteredArray = store.coins.filter(item => {
			if (keyword == "" || keyword == undefined) {
				return item;
			} else if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
				return item;
			}
		});
		setCoinsArray(filteredArray);
	};

	const searchHash = event => {
		searchFunction(event.target.value);
		if (event.target.value == "") {
			setCoinsArray(store.coins);
		}
		location.hash = `keyword=${event.target.value}`;
	};

	return (
		<div className="mt-3 px-5">
			<div className="d-flex justify-content-center">
				<h1 className="p-0 gold">Crypto Tracker</h1>
			</div>
			<div className="d-flex justify-content-center">
				<input
					className="w-75 rounded p-1"
					placeholder="Search cryptocurrency here"
					onChange={event => searchHash(event)}
				/>
			</div>
			{store.coins.length == 0 ? (
				<Alert variant="warning" className="m-3 text-large text-center">
					Loading...
				</Alert>
			) : (
				<div className="d-flex w-100 row justify-content-center">
					{coinsArray.map((item, index) => {
						return <Cards key={index} coinObj={item} />;
					})}
				</div>
			)}
		</div>
	);
};
