import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home.js";
import Collection from "./Pages/Collection/Collection";
import Photogrid from "./Pages/Photogrid/Photogrid";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
    return (
        <div>
            <BrowserRouter basename="/">
                <Routes>
                    <Route exact path="/Home" element={<Home />} />
                    <Route path="/Collection" element={<Collection />} />
                    <Route path="/Photogrid" element={<Photogrid />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
