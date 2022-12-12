import { StyledLabel } from "../FormInput/style"
import { StyledFormSelect } from "./style"

export const FormSelect = ({label , register}) => {
    return (
        <StyledLabel>
            {label}
            <StyledFormSelect name="techStatus" id="techStatus" {...register}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </StyledFormSelect>
        </StyledLabel>
    )
}