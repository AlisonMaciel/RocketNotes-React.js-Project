import { createContext, useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

import {api} from "../services"

function AuthProvider ({children}) {
    const [data, setData] = useState({})

    async function signIn({email, password}) {

        try {
            const response = await api.post("/sessions", {email, password})
            const {user, token} = response.data

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({user, token})            

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message) 
            } else {
                alert("Não foi possível logar")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")
        setData({})
    }

    async function updateProfile({user, avatarFile}) {
        try {

            if(avatarFile) {
                const fileUpload = new FormData()
                fileUpload.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUpload)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

            setData({user, token: data.token})
            alert("Usuário atualizado")

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message)
            }
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token")
        const user = localStorage.getItem("@rocketnotes:user")

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
            user: data.user
            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth () {
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}