import {BrowserRouter} from "react-router-dom"

import {useAuth} from "../hooks/auth"

import { AppRouter } from "./app.routes"
import { AuthenticationRoutes } from "./auth.routes"

export function Routes() {

    const {user} = useAuth()

    return (
        <BrowserRouter>
            {user ? <AppRouter/> : <AuthenticationRoutes/>}
        </BrowserRouter>
    )
}