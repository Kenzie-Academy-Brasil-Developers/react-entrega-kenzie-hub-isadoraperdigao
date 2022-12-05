import { useNavigate } from "react-router-dom"
import Logo from "../../assets/img/Logo.svg"
import { DarkGrayButton } from "../../components/DarkGrayButton"
import { StyledContainer } from "../../styles/container/style"
import { StyledTitle } from "../../styles/typography/style"
import { RegisterForm } from "./RegisterForm"
import { StyledRegisterPage } from "./style"


export const RegisterPage = () => {
    const navigate = useNavigate()

    const backToLoginAction = () => navigate("/")

    return (
        <StyledRegisterPage>
            <header>
                <img src={Logo} alt="Logo Kenzie Hub" />
                <DarkGrayButton width="one" text="Voltar" action={backToLoginAction}/>
            </header>
            <StyledContainer>
                <StyledTitle fontSize="one">Crie sua conta</StyledTitle>   
                <p>Rapido e grátis, vamos nessa</p> 
                <RegisterForm/>
            </StyledContainer>
        </StyledRegisterPage>
        

    )
}