import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

export const VehicleDetail = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [vehicleDetail, setVehicleDetail] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then(response => response.json())
            .then(data => {
                setVehicleDetail(data.result);
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
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                            onError={(event) => {
                                event.currentTarget.onerror = null; // prevents loop
                                event.currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                            }} className="cardImageDetail img-fluid" alt="..." />
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
                        <h2 className="cardTitle text-warning">Vehicle Details</h2>
                    </div>
                    {vehicleDetail ? (
                        <div className="card-body-detail d-flex flex-wrap justify-content-center mt-4 fs-5">
                            <div className="detail">
                                <p className="text-warning">Name</p>
                                <p>{vehicleDetail.properties.name}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Model</p>
                                <p>{vehicleDetail.properties.model}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Manufacturer</p>
                                <p>{vehicleDetail.properties.manufacturer}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Length</p>
                                <p>{vehicleDetail.properties.length}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Cargo Capacity</p>
                                <p>{vehicleDetail.properties.cargo_capacity}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Consumables</p>
                                <p>{vehicleDetail.properties.consumables}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Cost in Credits</p>
                                <p>{vehicleDetail.properties.cost_in_credits}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-warning">Loading vehicle details...</p>
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
