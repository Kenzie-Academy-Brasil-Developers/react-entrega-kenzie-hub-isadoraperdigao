import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { BrandButton } from "../../../components/brandButton"
import { FormInput } from "../../../components/FormInput"
import { StyledFormContainer } from "../../../styles/formContainer/style"
import { loginSchema } from "./loginSchema"
import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext"


export const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema)
    })

    const {userLogin} = useContext(UserContext)

    return (
        <StyledFormContainer noValidate onSubmit={handleSubmit(userLogin)}>
            <FormInput label="Email" placeholder="Digite seu email" type="email" id="email" register={register("email")}/>
            {errors.email && <p>{errors.email.message}</p>}
            <FormInput label="Senha" placeholder="Digite sua senha" type="password" id="password" register={register("password")}/>
            {errors.password && <p>{errors.password.message}</p>}
            <BrandButton text="Entrar" />
        </StyledFormContainer>
    )
}