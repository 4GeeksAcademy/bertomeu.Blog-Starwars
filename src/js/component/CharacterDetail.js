import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";


export const CharacterDetail = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [characterDetail, setCharacterDetail] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacterDetail(data.result);
                setDescription(data.result.description);
                actions.loadFavorites();
            })
            .catch(error => console.error('Error', error));
    }, [id]);

    return (
        <div className="container mt-3">
            <div className="containerCardDetail border border-warning border-5 bg-dark p-4 mb-3 ">
                <div className="cardDetail d-flex justify-content-around">
                    
                        <div className="imageAndDescriptionColumn">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
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
                        <h2 className="cardTitle text-warning">Character Details</h2>
                    </div>
                    {characterDetail ? (
                        <div className="card-body-detail d-flex flex-wrap justify-content-center mt-4 fs-5">
                            <div className="detail">
                                <p className="text-warning">Name</p>
                                <p>{characterDetail.properties.name}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Birth Year</p>
                                <p>{characterDetail.properties.birth_year}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Gender</p>
                                <p>{characterDetail.properties.gender}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Height</p>
                                <p>{characterDetail.properties.height}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Weight</p>
                                <p>{characterDetail.properties.mass}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Eye Color</p>
                                <p>{characterDetail.properties.eye_color}</p>
                            </div>
                            <div className="detail">
                                <p className="text-warning">Hair Color</p>
                                <p>{characterDetail.properties.hair_color}</p>
                            </div>
                        </div>
                    ) :
                        <p className="text-warning">Loading character details...</p>
                    }
                </div>
                <div className="col text-center">
                    <Link to="/">
                        <button className="BackToHomePage btn btn-warning mt-5">Back to Home Page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
