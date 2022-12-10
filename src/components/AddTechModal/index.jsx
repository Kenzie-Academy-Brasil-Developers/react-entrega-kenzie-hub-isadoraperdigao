import { StyledTitle } from "../../styles/typography/style"
import { FormInput } from "../FormInput"
import { StyledAddTechModal, StyledModalBox } from "./style"

export const AddTechModal = () => {
    return (
        <StyledAddTechModal>
            <StyledModalBox>
                <header>
                    <StyledTitle fontSize="three">Cadastrar tecnologia</StyledTitle>
                    <button>X</button>
                </header>
                <form>
                    <FormInput label="Nome" placeholder="Typescript" type="text" id="techName" />
                    <select name="techStatus" id="techStatus">
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                </form>
            </StyledModalBox>
        </StyledAddTechModal>
    )
}