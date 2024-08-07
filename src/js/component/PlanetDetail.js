import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

export const PlanetDetail = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [planetDetail, setPlanetDetail] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
            .then(response => response.json())
            .then(data => {
                setPlanetDetail(data.result);
                setDescription(data.result.description);
                actions.loadFavorites();
            })
            .catch(error => console.error('Error', error));
    }, [id]);

    return (
        <div className="container mt-3">
            <div className="containerCardDetail border border-warning border-5 bg-dark p-4 mb-3">
                <div className="cardDetail d-flex justify-content-around">
                    
                        <div className="imageAndDescriptionColumn">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                onError={(event) => {
                                    event.currentTarget.onerror = null; // prevents loop
                                    event.currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                }} className="cardImageDetail img-fluid" alt="..." style={{ maxWidth: "400px", maxHeight: "400px" }} />
                        </div>
                        <div className="imageAndDescriptionColumn2">
                            <div className="description">
                                <h3 className="text-warning">Description</h3>
                            </div>
                            <div className="description fs-5">
                                <p>{description}</p>
                            </div>
                        </div>
                    
                </div>
               
                <div className="containerOtherDetails mt-4">
                    <div className="d-flex justify-content-center">
                        <h2 className="cardTitle text-warning">Planet Details</h2>
                    </div>
                    {planetDetail ? (
                        <div className="card-body-detail d-flex flex-wrap justify-content-center mt-4 fs-5">
                            <div className="detail">
                                <p className="text-warning">Name</p>
                                <p>{planetDetail.properties.name}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Rotation Period</p>
                                <p>{planetDetail.properties.rotation_period}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Orbital Period</p>
                                <p>{planetDetail.properties.orbital_period}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Climate</p>
                                <p>{planetDetail.properties.climate}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Diameter</p>
                                <p>{planetDetail.properties.diameter}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Gravity</p>
                                <p>{planetDetail.properties.gravity}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Population</p>
                                <p>{planetDetail.properties.population}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Terrain</p>
                                <p>{planetDetail.properties.terrain}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-warning">Loading planet details...</p>
                    )}
                </div>
                <div className="col text-center">
                    <Link to="/">
                        <button className="backToHomePageButton btn btn-warning mt-5">Back to Home Page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
