// const apiURL = process.env.API_HOST;
const apiURL = "https://api.coinlore.net/api/tickers/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			coins: [],
			favorites: [],
			currentUser: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			initializeData: () => {
				getActions().loadAssets();
			},

			loadAssets: () => {
				fetch(apiURL)
					.then(response => response.json())
					.then(information => setStore({ coins: information["data"] }))
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
			}
		}
	};
};

export default getState;
