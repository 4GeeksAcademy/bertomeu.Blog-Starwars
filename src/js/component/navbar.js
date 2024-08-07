import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import AudioComponent from "./AudioComponent";



export const Navbar = ({ favorites }) => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg bg-black border-bottom border-warning"  >
            <div className="container">
                <a className="navbar-brand d-flex align-items-center w-100 justify-content-between" href="#">
                    <img src="https://res.cloudinary.com/dyvut6idr/image/upload/v1722858062/star-wars-logo_zpojur.png" alt="Logo" className="img-fluid" style={{ maxWidth: "10%", height: "auto" }} />
                    <AudioComponent />
                    <div className="ms-5">
                        <div className="favoritesButton btn-group dropstart">
                            <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites <span className="badge bg-secondary">{store.favoritesCount}</span>
                            </button>
                            <ul className="dropdown-menu bg-dark">
                                {favorites.map((character, index) => (
                                    <li key={index}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="dropdown-item text-warning">{character.name}</span>
                                            <button className="btn btn-link" onClick={(event) => actions.deleteFavorite(character, event)}>
                                                <i className="fas fa-trash-alt text-warning"></i>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        </nav>
    );
};
