import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { BrandButton } from "../../../components/brandButton"
import { FormInput } from "../../../components/FormInput"
import { StyledLabel } from "../../../components/FormInput/style"
import { StyledFormContainer } from "../../../styles/formContainer/style"
import { StyledSelect } from "./style"
import { registerSchema } from "./registerSchema"
import { api } from "../../../api/api.js"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

export const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema)
    })

    const navigate = useNavigate()

    const userRegister = async (formData) => {
        try {
            const response = await api.post('users', formData);
            //toast.success(response.data.message)
            navigate("/")
            console.log("success!")
        } catch (error) {
           // toast.error(error.response.data.message)
            console.log(error.response.data.message)
        } 
      }

    const submitFunction = (data) => {
        const dataToPost = {
            email: data.email,
            password: data.password,
            name: data.name,
            bio: data.bio,
            contact: data.contact,
            course_module: data.course_module
        }
        userRegister(dataToPost)
    }

    return (
        <StyledFormContainer noValidate onSubmit={handleSubmit(submitFunction)}>
            <FormInput label="Nome" placeholder="Digite aqui seu nome" type="text" id="name" register={register("name")} />
            {errors.name && <p>{errors.name.message}</p>}
            <FormInput label="Email" placeholder="Digite aqui seu email" type="email" id="email" register={register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
            <FormInput label="Senha" placeholder="Digite aqui sua senha" type="password" id="password" register={register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
            <FormInput label="Confirmar senha" placeholder="Digite novamente sua senha" type="password" id="confirmPassword" register={register("confirmPassword")} />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <FormInput label="Bio" placeholder="Fale sobre você" type="text" id="bio" register={register("bio")} />
            {errors.bio && <p>{errors.bio.message}</p>}
            <FormInput label="Contato telefônico" placeholder="Opção de contato" type="text" id="contact" register={register("contact")} />
            {errors.contact && <p>{errors.contact.message}</p>}
            <StyledLabel htmlFor="courseModule">
            Selecionar módulo
                <StyledSelect className= "selectModule" name="course_module" id="course_module" {...register("course_module")}>
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