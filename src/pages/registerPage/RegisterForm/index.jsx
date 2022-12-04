import { BrandButton } from "../../../components/brandButton"
import { FormInput } from "../../../components/FormInput"
import { StyledFormContainer } from "../../../styles/formContainer/style"

export const RegisterForm = () => {
    return (
        <StyledFormContainer>
            <FormInput label="Nome" placeholder="Digite seu nome" />
            <FormInput label="Senha" placeholder="Digite sua senha" />
            <BrandButton text="Entrar" />
        </StyledFormContainer>
    )
}