import { Link } from "react-router-dom"
import Logo from "../../assets/img/Logo.svg"
import { DarkGrayButton } from "../../components/DarkGrayButton"
import { StyledContainer } from "../../styles/container/style"
import { StyledTitle } from "../../styles/typography/style"
import { RegisterForm } from "./RegisterForm"
import { StyledRegisterPage } from "./style"


export const RegisterPage = () => {

    return (
        <StyledRegisterPage>
            <header>
                <img src={Logo} alt="Logo Kenzie Hub" />
                <Link to={"/"} >
                    <DarkGrayButton width="one" text="Voltar" />
                </Link>
            </header>
            <StyledContainer>
                <StyledTitle fontSize="one">Crie sua conta</StyledTitle>   
                <p>Rapido e grátis, vamos nessa</p> 
                <RegisterForm/>
            </StyledContainer>
        </StyledRegisterPage>
        

    )
}