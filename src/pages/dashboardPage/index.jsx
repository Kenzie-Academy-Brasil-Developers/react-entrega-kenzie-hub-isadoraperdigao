import { useEffect } from "react"
import { useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { api } from "../../api/api"
import Logo from "../../assets/img/Logo.svg"
import { AddTechModal } from "../../components/AddTechModal"
import { DarkGrayButton } from "../../components/DarkGrayButton"
import { EditTechModal } from "../../components/EditTechModal"
import { TechList } from "../../components/TechList"
import { TechListHeader } from "../../components/TechListHeader"
import { UserContext } from "../../contexts/UserContext"
import { StyledTitle } from "../../styles/typography/style"
import { StyledDashboardContentContainer, StyledDashboardHeader, StyledDashboardPage, StyledDashboardUserContentContainer, StyledUserCard } from "./style"

export const DashboardPage = () => {
    const {user, loading, backToLoginAction} = useContext(UserContext)

    if(loading) {
        return null
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
                    <StyledDashboardUserContentContainer>
                        <StyledTitle fontSize="two">Olá, {user.name}</StyledTitle>
                        <span>{user.course_module}</span>
                    </StyledDashboardUserContentContainer>
                </StyledUserCard>
                <StyledDashboardContentContainer>
                    <TechListHeader />
                    <TechList />
                </StyledDashboardContentContainer>
                <AddTechModal />
                <EditTechModal />
            </StyledDashboardPage>
        )
    } else {
        return <Navigate to={"/"} />
    }

}