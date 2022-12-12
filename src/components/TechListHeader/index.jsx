import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"
import { SmallGrayButton } from "../SmallGrayButton"
import { StyledTechListHeader } from "./style"

export const TechListHeader = () => {
    const {openModal} = useContext(TechContext)


    return (
        <StyledTechListHeader>
            <h2>Tecnologias</h2>
            <SmallGrayButton action={openModal}/>
        </StyledTechListHeader>
    )
}