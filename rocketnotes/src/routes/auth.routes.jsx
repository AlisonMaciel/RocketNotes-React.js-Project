import {Routes, Route} from "react-router-dom"

import {SignIn} from "../pages/SignIn"
import {SignInUp} from "../pages/SignInUp"

export function AuthenticationRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/signinup" element={<SignInUp/>}/>
        </Routes>
    )
}