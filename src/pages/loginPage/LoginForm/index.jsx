import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { api } from "../../../api/api"
import { BrandButton } from "../../../components/brandButton"
import { FormInput } from "../../../components/FormInput"
import { StyledFormContainer } from "../../../styles/formContainer/style"
import { loginSchema } from "./loginSchema"
import { toast } from "react-toastify"

export const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema)
    })

    const navigate = useNavigate()

    const onLoginSubmit = async (formData) => {
        try {
            const responseLogin = await api.post("sessions", formData)
            toast.success(responseLogin.data.message)
            window.localStorage.setItem("@TOKEN", responseLogin.data.token)
            window.localStorage.setItem("@USERID", responseLogin.data.user.id)
            navigate(`/dashboard/${responseLogin.data.user.name}`)

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <StyledFormContainer noValidate onSubmit={handleSubmit(onLoginSubmit)}>
            <FormInput label="Email" placeholder="Digite seu email" type="email" id="email" register={register("email")}/>
            {errors.email && <p>{errors.email.message}</p>}
            <FormInput label="Senha" placeholder="Digite sua senha" type="password" id="password" register={register("password")}/>
            {errors.password && <p>{errors.password.message}</p>}
            <BrandButton text="Entrar" />
        </StyledFormContainer>
    )
}