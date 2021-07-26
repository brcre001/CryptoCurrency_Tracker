import React from "react";
import { Cards } from "../component/Card.js";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<div>
			<Cards />
		</div>
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
