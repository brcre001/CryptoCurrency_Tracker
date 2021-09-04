const apiURL = process.env.API_HOST;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			currentUser: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			initializeData: () => {
				getActions().loadCharacters();
				getActions().loadPlanets();
				getActions().loadVehicles();
			},

			loadCharacters: () => {
				fetch(`${apiURL}/people`)
					.then(response => response.json())
					.then(information => setStore({ people: information }))
					.catch(error => console.log(error));
			},
			loadPlanets: () => {
				fetch(`${apiURL}/planet`)
					.then(response => response.json())
					.then(information => setStore({ planets: information }))
					.catch(error => console.log(error));
			},
			loadVehicles: () => {
				fetch(`${apiURL}/vehicle`)
					.then(response => response.json())
					.then(information => setStore({ vehicles: information }))
					.catch(error => console.log(error));
			},
			addFavorite: favoriteName => {
				let newFavorites = getStore().favorites;
				let found = newFavorites.find(item => item == favoriteName);
				if (found) {
					newFavorites = newFavorites.filter(item => item != favoriteName);
				} else {
					newFavorites = [...newFavorites, favoriteName];
				}
				setStore({ favorites: newFavorites });
			},

			getToken: async (email, password) => {
				// When we return the token the login.js will be able to history.push
				let response = await fetch(`${apiURL}/token`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password })
				});
				if (!response.ok) {
					throw Error("Invalid credentials");
				}
				let data = await response.json();
				localStorage.setItem("jwt-token", data.token);
				setStore({ currentUser: { email, token: data.token } });
				return data.token;
			},
			logout: () => {
				localStorage.removeItem("jwt-token");
				setStore({ currentUser: null });
			}
		}
	};
};

export default getState;
