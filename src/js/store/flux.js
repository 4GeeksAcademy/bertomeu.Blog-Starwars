export const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            favorites: [],
            favoritesCount: 0
        },

        actions: {
            fetchCharacters: () => {
                fetch("https://www.swapi.tech/api/people/") // información de la API
                    .then(response => response.json())
                    .then(data => setStore({ characters: data.results }))
                    .catch(error => console.error("Error", error));
            },
            fetchVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(response => response.json())
                    .then(data => setStore({ vehicles: data.results }))
                    .catch(error => console.error("Error", error));
            },
            fetchPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(response => response.json())
                    .then(data => setStore({ planets: data.results }))
                    .catch(error => console.error("Error", error));
            },

            addFavoriteCharacter: (character) => { // agregar  favoritos
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav.name !== character.name);
                if (updatedFavorites.length === store.favorites.length) {
                    // El personaje no estaba en la lista de favoritos, lo agregamos
                    setStore({ favorites: [...store.favorites, character] });
                    setStore({ favoritesCount: store.favoritesCount + 1 });
                } else {
                    // El personaje ya estaba en la lista de favoritos, lo eliminamos
                    setStore({ favorites: updatedFavorites });
                    setStore({ favoritesCount: store.favoritesCount - 1 });
                }
                
                getActions().saveFavorites();
            },

            addFavoriteVehicle: (vehicle) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav.name !== vehicle.name);
                if (updatedFavorites.length === store.favorites.length) { 
                    setStore({ favorites: [...store.favorites, vehicle] });
                    setStore({ favoritesCount: store.favoritesCount + 1 });
                } else {
                    setStore({ favorites: updatedFavorites });
                    setStore({ favoritesCount: store.favoritesCount - 1 });
                }
                getActions().saveFavorites();
            },

            addFavoritePlanet: (planet) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav.name !== planet.name);
                if (updatedFavorites.length === store.favorites.length) {
                    setStore({ favorites: [...store.favorites, planet] });
                    setStore({ favoritesCount: store.favoritesCount + 1 });
                } else {
                    setStore({ favorites: updatedFavorites });
                    setStore({ favoritesCount: store.favoritesCount - 1 });
                }
                getActions().saveFavorites();
            },

            loadFavorites: () => {
                const localFavorites = JSON.parse(localStorage.getItem("favorites"));
                if (localFavorites) {
                    setStore({ favorites: localFavorites });
                    setStore({ favoritesCount: localFavorites.length });
                }
            },

            saveFavorites: () => {
                const store = getStore();
                localStorage.setItem("favorites", JSON.stringify(store.favorites));
            },

            deleteFavorite: (favorite, event) => {
                event.stopPropagation(); // Para evitar que se cierre el dropdown al borrar un favorito
                const store = getStore();
                const updatedFavorites = store.favorites.filter(item => item.name !== favorite.name);
                setStore({ favorites: updatedFavorites });
                setStore({ favoritesCount: updatedFavorites.length });                
                getActions().saveFavorites();
            },

            fetchCharacterDetail: (characterId) => {
                return fetch(`https://www.swapi.tech/api/people/${characterId}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        return data.result;
                    })
                    .catch(error => {
                        console.error('Error fetching character detail:', error);
                        return null;
                    });
            },

            fetchVehicleDetail: (vehicleId) => {
                return fetch(`https://www.swapi.tech/api/vehicles/${vehicleId}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        return data.result;
                    })
                    .catch(error => {
                        console.error('Error fetching vehicle detail:', error);
                        return null;
                    });
            },

            fetchPlanetDetail: (planetId) => {
                return fetch(`https://www.swapi.tech/api/planets/${planetId}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        return data.result;
                    })
                    .catch(error => {
                        console.error('Error fetching planet detail:', error);
                        return null;
                    });
            }
        }
    }
};
