import { StyledFormInput, StyledLabel } from "./style"

export const FormInput = ({label, placeholder}) => {
    return (
        <StyledLabel htmlFor={label}>{label}
            <StyledFormInput placeholder={placeholder} />
        </StyledLabel>
    )
}