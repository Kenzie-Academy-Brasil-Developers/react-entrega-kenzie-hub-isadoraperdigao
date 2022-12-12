import { StyledTechItem } from "./style"
import trashIcon from "../../assets/img/trashIcon.svg"
import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"

export const TechItem = ({tech}) => {
    const { openEditModal} = useContext(TechContext)

    return (
        <StyledTechItem onClick={() => openEditModal(tech)}>
            <p>{tech.title}</p>
            <span>{tech.status}</span>
            <img src={trashIcon} alt="Ícone de lixeira" />
        </StyledTechItem>
    )
}