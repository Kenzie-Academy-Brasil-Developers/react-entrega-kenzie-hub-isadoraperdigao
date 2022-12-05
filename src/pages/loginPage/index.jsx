import { useNavigate } from "react-router-dom"
import Logo from "../../assets/img/Logo.svg"
import { GrayButton } from "../../components/GrayButton"
import { StyledContainer } from "../../styles/container/style"
import { StyledTitle } from "../../styles/typography/style"
import { LoginForm } from "./LoginForm"
import { StyledLoginPage } from "./style"

export const LoginPage = () => {
    const navigate = useNavigate()
    const backToRegisterAction = () => navigate("/register")

    return (
        <StyledLoginPage>
            <img src={Logo} alt="Logo Kenzie Hub" />
            <StyledContainer>
                <StyledTitle fontSize="one" >Login</StyledTitle>
                <LoginForm />
                <div>
                    <p>Ainda não possui uma conta?</p>
                    <GrayButton text="Cadastrar" action={backToRegisterAction}/>
                </div>
            </StyledContainer>

        </StyledLoginPage>
    )
}