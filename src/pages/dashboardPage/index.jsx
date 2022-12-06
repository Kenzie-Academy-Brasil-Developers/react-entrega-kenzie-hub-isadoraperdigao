import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../../api/api"
import Logo from "../../assets/img/Logo.svg"
import { DarkGrayButton } from "../../components/DarkGrayButton"
import { StyledTitle } from "../../styles/typography/style"
import { StyledDashboardContentContainer, StyledDashboardHeader, StyledDashboardPage, StyledUserCard } from "./style"

export const DashboardPage = () => {
    let userId = window.localStorage.getItem("@USERID")
    
    const [user, setUser] = useState(null)

    useEffect(() => {
        api.get(`users/${userId}`).then((response) =>{
            setUser(response.data)
        })
    }, [])

    const backToLoginAction = () => {
        window.localStorage.removeItem("@TOKEN")
        window.localStorage.removeItem("@USERID")   
    }

    if (user) {
        return (
            <StyledDashboardPage>
                <StyledDashboardHeader>
                    <img src={Logo} alt="Kenzie Hub Logo" />
                    <Link to={"/"}>
                        <DarkGrayButton text="Sair" width="two" action={backToLoginAction}/>
                    </Link>
                </StyledDashboardHeader>
                <StyledUserCard>
                    <StyledDashboardContentContainer>
                        <StyledTitle fontSize="two">Olá, {user.name}</StyledTitle>
                        <span>{user.course_module}</span>
                    </StyledDashboardContentContainer>
                </StyledUserCard>
                <StyledDashboardContentContainer>
                    <div>
                        <StyledTitle fontSize="two">Que pena! Estamos em desenvolvimento</StyledTitle>
                        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                    </div>
                </StyledDashboardContentContainer>
            </StyledDashboardPage>
        )

        
    }

    return <StyledTitle>Carregando...</StyledTitle>
}