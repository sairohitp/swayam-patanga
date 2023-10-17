import "./App.css"
import { Route, Routes } from "react-router-dom"

import Home from "./Pages/Home/Home.js"
import Collection from "./Pages/Collection/collection"
import Photogrid from "./Pages/Photogrid/photogrid"
import Contact from "./Pages/Contact/contact"
import NotFound from "./Pages/NotFound/notfound"

function App() {
    return(
        <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/Collection" element = {<Collection/>} />
            <Route path = "/Photogrid" element = {<Photogrid/>} />
            <Route path = "/Contact" element = {<Contact/>} />
            <Route path = "*" element= {<NotFound />} />
        </Routes>
    )
}

export default App