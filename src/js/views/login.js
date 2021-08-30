import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/login.scss";
import { useState, useContext } from "react";
import { Context } from "../store/appContext.js";

export const Login = () => {
	const { actions, store } = useContext(Context);
	const history = useHistory();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div id="formContent" className="mx-auto">
			<div className="fadeIn first">
				<img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
			</div>

			<form
				onSubmit={async e => {
					e.preventDefault();
					const token = await actions.createToken(username, password);
					if (token) history.push("/");
				}}>
				<input
					onChange={e => setUsername(e.target.value)}
					value={username}
					type="text"
					id="login"
					className="fadeIn second"
					name="login"
					placeholder="login"
				/>
				<input
					onChange={e => setPassword(e.target.value)}
					value={password}
					type="password"
					id="password"
					className="fadeIn third"
					name="login"
					placeholder="password"
				/>
				<input type="submit" className="fadeIn fourth" value="Log In" />
			</form>

			<div id="formFooter">
				<a className="underlineHover" href="#">
					Forgot Password?
				</a>
			</div>
		</div>
	);
};
