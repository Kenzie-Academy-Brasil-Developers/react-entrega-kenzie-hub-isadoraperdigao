import Logo from "../../assets/img/Logo.svg"
import { DarkGrayButton } from "../../components/DarkGrayButton"
import { StyledRegisterPage } from "./style"

export const RegisterPage = () => {
    return (
        <StyledRegisterPage>
            <header>
                <img src={Logo} alt="Logo Kenzie Hub" />
                <DarkGrayButton width="one" text="Voltar" />
            </header>
        </StyledRegisterPage>
    )
}