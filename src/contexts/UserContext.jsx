import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api/api";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const token = localStorage.getItem("@TOKEN")
    const userId = localStorage.getItem("@USERID")

    useEffect(() => {
        const loadUser = async () => {
            

            if(!token) {
                setLoading(false)
                return 
            }

            try {
                const {data} = await api.get(`users/${userId}`)

                setUser(data)

            } catch (error) {
                localStorage.removeItem("@TOKEN")
                localStorage.removeItem("@USERID")
            } finally {
                setLoading(false)
            }
        }
        loadUser()

    }, [])

    const userRegister = async (formData) => {
        try {
            const response = await api.post('users', formData);

            toast.success(response.data.message)

            navigate("/")

        } catch (error) {
            toast.error(error.response.data.message)
        } 
    }

    const userLogin = async (formData) => {
        try {
            const responseLogin = await api.post("sessions", formData)
            const {token, user: userResponse} = responseLogin.data
            
            setUser(userResponse)
            api.defaults.headers.common.authorization = `Bearer ${token}`

            toast.success(responseLogin.data.message)

            localStorage.setItem("@TOKEN", token)
            localStorage.setItem("@USERID", userResponse.id)

            navigate(`/dashboard/${user.name}`)

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const backToLoginAction = () => {
        window.localStorage.removeItem("@TOKEN")
        window.localStorage.removeItem("@USERID")   
        setUser(null)
    }

    return (
        <UserContext.Provider value={{user, setUser, userRegister, userLogin, loading, token, backToLoginAction}}>
            {children}
        </UserContext.Provider>
    )
}