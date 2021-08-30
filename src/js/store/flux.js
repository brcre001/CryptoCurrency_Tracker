const apiURL = process.env.API_HOST;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
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
					.then(data => data)
					.then(information => setStore({ people: information }))
					.catch(error => console.log(error));
			},
			loadPlanets: () => {
				fetch(`${apiURL}/planet`)
					.then(response => response.json())
					.then(data => data)
					.then(information => setStore({ planets: information }))
					.catch(error => console.log(error));
			},
			loadVehicles: () => {
				fetch(`${apiURL}/vehicle`)
					.then(response => response.json())
					.then(data => data)
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

			createToken: async (email, password) => {
				// When we return the token the login.js will be able to history.push
				return "sdlkjfas";
			}
		}
	};
};

export default getState;
