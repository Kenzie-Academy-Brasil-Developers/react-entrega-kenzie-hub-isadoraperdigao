import { StyledFormInput, StyledLabel } from "./style"

export const FormInput = ({label, placeholder, type, id, register, defaultValue, disabled}) => {

    return (
        <StyledLabel htmlFor={label}>{label}
            <StyledFormInput disabled={disabled ? true : null} placeholder={placeholder} type={type} id={id} {...register} defaultValue={defaultValue} />
        </StyledLabel>
    )
}