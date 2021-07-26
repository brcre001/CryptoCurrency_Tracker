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
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => data.results)
					.then(information => setStore({ people: information }))
					.catch(error => console.log(error));
			},
			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets")
					.then(response => response.json())
					.then(data => data.results)
					.then(information => setStore({ planets: information }))
					.catch(error => console.log(error));
			},
			loadVehicles: () => {
				fetch("https://swapi.dev/api/vehicles")
					.then(response => response.json())
					.then(data => data.results)
					.then(information => setStore({ vehicles: information }))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
