import {Routes, Route, Navigate} from "react-router-dom"

import {SignIn} from "../pages/SignIn"
import {SignInUp} from "../pages/SignInUp"

export function AuthenticationRoutes() {

    const user = localStorage.getItem("@rocketnotes:user")

    return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/signinup" element={<SignInUp/>}/>

            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}