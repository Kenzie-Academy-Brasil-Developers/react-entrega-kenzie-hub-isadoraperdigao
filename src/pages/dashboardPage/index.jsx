import Logo from "../../assets/img/Logo.svg"
import { DarkGrayButton } from "../../components/DarkGrayButton"
import { StyledTitle } from "../../styles/typography/style"
import { StyledDashboardContentContainer, StyledDashboardHeader, StyledDashboardPage, StyledUserCard } from "./style"

export const DashboardPage = () => {
    return (
        <StyledDashboardPage>
            <StyledDashboardHeader>
                <img src={Logo} alt="Kenzie Hub Logo" />
                <DarkGrayButton text="Sair" width="two" />
            </StyledDashboardHeader>
            <StyledUserCard>
                <StyledDashboardContentContainer>
                    <StyledTitle fontSize="two">Olá, Samuel Leão</StyledTitle>
                    <span>Primeiro módulo  (Introdução ao Frontend)</span>
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