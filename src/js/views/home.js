import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { PersonCard, VehicleCard, PlanetCard } from "../component/Card";

export const Home = () => {
    const { store, actions } = useContext(Context);

    /*useEffect(() => {
        actions.fetchCharacters();
        actions.fetchVehicles();
        actions.fetchPlanets();
        actions.loadFavorites();
    }, []);*/

    return (
        <div >
            <div className="container mt-5">
                
                <h1 className="text-warning">Characters</h1>
                <div className="row flex-nowrap overflow-auto cards">
                    {store.characters && store.characters.map((character, index) => (
                        <div className="cardContainer col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                            <PersonCard
                                character={character}
                                addFavorite={actions.addFavoriteCharacter}
                                favorites={store.favorites}
                            />
                        </div>
                    ))}
                </div>
                
            </div>
                    
            <div className="container mt-5">
                <h1 className="text-warning">Vehicles</h1>    
                <div className="row flex-nowrap overflow-auto cards">
                    {store.vehicles && store.vehicles.map((vehicle, index) => (
                        <div className="cardContainer col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                            <VehicleCard
                                vehicle={vehicle}
                                addFavorite={actions.addFavoriteVehicle}
                                favorites={store.favorites}
                            />
                        </div>
                    ))}
                </div>
            </div>
              
            <div className="container my-5 ">
                <h1 className="text-warning">Planets</h1>
                <div className="row flex-nowrap overflow-auto cards">
                    {store.planets && store.planets.map((planet, index) => (
                        <div className="cardContainer col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                            <PlanetCard
                                planet={planet}
                                addFavorite={actions.addFavoritePlanet}
                                favorites={store.favorites}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};