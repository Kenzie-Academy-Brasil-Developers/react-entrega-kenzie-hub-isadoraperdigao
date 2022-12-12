import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../contexts/TechContext"
import { StyledTechModal } from "../../styles/container/modalContainer/style"
import { StyledTitle } from "../../styles/typography/style"
import { BrandButton } from "../brandButton"
import { FormInput } from "../FormInput"
import { FormSelect } from "../FormSelect"
import { GrayButton } from "../GrayButton"
import { StyledEditModalBox } from "./style"

export const EditTechModal = () => {
    const {showEditModal, closeEditModal, removeTechFromList, selectedTech, editTech} = useContext(TechContext)
    const {register, handleSubmit} = useForm({
        defaultValues: {title: "teste"}
    })

    return showEditModal && (
        <StyledTechModal>
            <StyledEditModalBox>
            <header>
                    <StyledTitle fontSize="three">Tecnologia Detalhes</StyledTitle>
                    <button onClick={closeEditModal}>X</button>
                </header>
                <form onSubmit={handleSubmit(editTech)}>
                    <FormInput label="Nome do projeto" type="text" id="title" defaultValue={selectedTech.title} disabled />
                    <FormSelect label="Status" id="status" register={register("status")}/>
                    <div>
                        <BrandButton text="Salvar alteração" type="submit"/>
                        <GrayButton text="Excluir" action={() => removeTechFromList(selectedTech.id)}/>
                    </div>
                </form>
            </StyledEditModalBox>
        </StyledTechModal>
    )
}