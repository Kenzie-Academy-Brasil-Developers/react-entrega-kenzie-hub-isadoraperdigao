import { StyledFormInput, StyledLabel } from "./style"

export const FormInput = ({label, placeholder, type, id, register}) => {
    return (
        <StyledLabel htmlFor={label}>{label}
            <StyledFormInput placeholder={placeholder} type={type} id={id} {...register} />
        </StyledLabel>
    )
}