import { BrandButton } from "../../../components/brandButton"
import { FormInput } from "../../../components/FormInput"
import { StyledLabel } from "../../../components/FormInput/style"
import { StyledFormContainer } from "../../../styles/formContainer/style"
import { StyledSelect } from "./style"

export const RegisterForm = () => {
    return (
        <StyledFormContainer>
            <FormInput label="Nome" placeholder="Digite aqui seu nome" />
            <FormInput label="Email" placeholder="Digite aqui seu email" />
            <FormInput label="Senha" placeholder="Digite aqui sua senha" />
            <FormInput label="Confirmar senha" placeholder="Digite novamente sua senha" />
            <FormInput label="Bio" placeholder="Fale sobre você" />
            <FormInput label="Contato" placeholder="Opção de contato" />
            <StyledLabel htmlFor="courseModule">
            Selecionar módulo
                <StyledSelect className= "selectModule" name="courseModule" id="courseModule">
                    <option value="m1">Primeiro Módulo</option>
                    <option value="m2">Segundo Módulo</option>
                    <option value="m3">Terceiro Módulo</option>
                    <option value="m4">Quarto Módulo</option>
                    <option value="m5">Quinto Módulo</option>
                    <option value="m6">Sexto Módulo</option>
                </StyledSelect>
            </StyledLabel>
            <BrandButton text="Entrar" />
        </StyledFormContainer>
    )
}