import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

export const PersonCard = ({ character, addFavorite, favorites }) => {
    const isFavoritePerson = favorites.some(favorite => favorite.name === character.name);



    return (
        <div className="container mt-3">

            <div className="card border border-warning border-5">
                <div className="imageContainerCard">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                        onError={(event) => {
                            event.currentTarget.onerror = null; // prevents loop
                            event.currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }} className="card-img-top" alt="..." />
                </div>
                <div className="card-body bg-dark">
                    <h5 className="card-title">{character.name}</h5>
                    <div className="favMoreButtons d-flex justify-content-between">
                        <Link to={`/character/${character.uid}`} className="btn btn-outline-warning">Read More!</Link>
                        <button onClick={() => addFavorite(character)} className="btn btn-outline-warning">
                            {isFavoritePerson ? (
                                <i className="fas fa-heart"></i>
                            ) : (
                                <i className="far fa-heart"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export const VehicleCard = ({ vehicle, addFavorite, favorites }) => {
    const isFavoriteVehicle = favorites.some(favorite => favorite.name === vehicle.name);


    return (
        <div className="container mt-3">

            <div className="card border border-warning border-5">
                <div className="imageContainerCard">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                        onError={(event) => {
                            event.currentTarget.onerror = null; // prevents loop
                            event.currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }} className="card-img-top" alt="..." />
                </div>
                <div className="card-body bg-dark">
                    <h5 className="card-title">{vehicle.name}</h5>
                    <div className="favMoreButtons d-flex justify-content-between">
                        <Link to={`/vehicle/${vehicle.uid}`} className="btn btn-outline-warning">Read More!</Link>
                        <button onClick={() => addFavorite(vehicle)} className="btn btn-outline-warning">
                            {isFavoriteVehicle ? (
                                <i className="fas fa-heart"></i>
                            ) : (
                                <i className="far fa-heart"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export const PlanetCard = ({ planet, addFavorite, favorites }) => {
    const isFavoritePlanet = favorites.some(favorite => favorite.name === planet.name);


    return (

        <div className="container mt-3">
            

                    <div className="card border border-warning border-5">
                        <div className="imageContainerCard">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                                onError={(event) => {
                                    event.currentTarget.onerror = null; // prevents loop
                                    event.currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                }} className="card-img-top img-fluid" alt="..." style={{ maxWidth: "400px", maxHeight: "400px" }} />
                        </div>
                        <div className="card-body bg-dark">
                            <h5 className="card-title">{planet.name}</h5>
                            <div className="favMoreButtons d-flex justify-content-between">
                                <Link to={`/planet/${planet.uid}`} className="btn btn-outline-warning">Read More!</Link>
                                <button onClick={() => addFavorite(planet)} className="btn btn-outline-warning">
                                    {isFavoritePlanet ? (
                                        <i className="fas fa-heart"></i>
                                    ) : (
                                        <i className="far fa-heart"></i>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                

        </div>

    );
};
