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
			loadCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => data.results)
					.then(information => setStore({ people: information }))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
