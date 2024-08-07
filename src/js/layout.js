import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Context } from "./store/appContext";
import injectContext from "./store/appContext";
import { CharacterDetail } from "./component/CharacterDetail";
import { PlanetDetail } from "./component/PlanetDetail";
import { VehicleDetail } from "./component/VehicleDetail";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import NavbarTop from "./component/navbarTop";
import StarField from "./component/StartField";




//create your first component
const Layout = () => {
    const { store } = useContext(Context);


    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";



    return (
        <div>

            <StarField />
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <NavbarTop />
                    <Navbar favorites={store.favorites} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/character/:id" element={<CharacterDetail />} />
                        <Route path="/vehicle/:id" element={<VehicleDetail />} />
                        <Route path="/planet/:id" element={<PlanetDetail />} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
            
        </div>
    );
};

export default injectContext(Layout);