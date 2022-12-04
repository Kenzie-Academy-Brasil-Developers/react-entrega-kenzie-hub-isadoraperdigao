import { BrandButton } from "../../../components/brandButton"
import { FormInput } from "../../../components/FormInput"
import { StyledFormContainer } from "../../../styles/formContainer/style"

export const LoginForm = () => {
    return (
        <StyledFormContainer>
            <FormInput label="Email" placeholder="Digite seu email" />
            <FormInput label="Senha" placeholder="Digite sua senha" />
            <BrandButton text="Entrar" />
        </StyledFormContainer>
    )
}