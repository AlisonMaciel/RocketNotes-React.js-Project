import {Routes, Route} from "react-router-dom"

import {New} from "../pages/New"
import {Profile} from "../pages/Profile"
import {Home} from "../pages/Home"
import {Details} from "../pages/Details"


export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/New" element={<New/>}/>
            <Route path="/Details/:id" element={<Details/>}/>
        </Routes>
    )
}