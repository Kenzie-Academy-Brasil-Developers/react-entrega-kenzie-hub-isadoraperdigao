import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../contexts/TechContext"
import { StyledTechModal } from "../../styles/container/modalContainer/style"
import { StyledTitle } from "../../styles/typography/style"
import { BrandButton } from "../brandButton"
import { FormInput } from "../FormInput"
import { FormSelect } from "../FormSelect"
import { StyledAddModalBox } from "./style"

export const AddTechModal = () => {
    const {showModal, closeModal, addTechToList} = useContext(TechContext)
    const {register, handleSubmit} = useForm()

    return showModal && (
        <StyledTechModal>
            <StyledAddModalBox>
                <header>
                    <StyledTitle fontSize="three">Cadastrar tecnologia</StyledTitle>
                    <button onClick={closeModal}>X</button>
                </header>
                <form onSubmit={handleSubmit(addTechToList)}>
                    <FormInput label="Nome" placeholder="Typescript" type="text" id="title" register={register("title")}/>
                    <FormSelect label="Selecionar status" id="status" register={register("status")}/>
                    <BrandButton text="Cadastrar tecnologia" type="submit"/>
                </form>
            </StyledAddModalBox>
        </StyledTechModal>
    )
}