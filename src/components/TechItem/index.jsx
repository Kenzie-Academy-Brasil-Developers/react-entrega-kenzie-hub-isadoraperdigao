import { StyledTechItem } from "./style"
import trashIcon from "../../assets/img/trashIcon.svg"

export const TechItem = ({tech}) => {
    return (
        <StyledTechItem>
            <p>{tech.title}</p>
            <span>{tech.status}</span>
            <img src={trashIcon} alt="Ícone de lixeira" />
        </StyledTechItem>
    )
}