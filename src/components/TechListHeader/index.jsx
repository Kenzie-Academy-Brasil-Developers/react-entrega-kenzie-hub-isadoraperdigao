import { useContext } from "react"
import { api } from "../../api/api"
import { UserContext } from "../../contexts/UserContext"
import { SmallGrayButton } from "../SmallGrayButton"
import { StyledTechListHeader } from "./style"

export const TechListHeader = () => {
    const {user} = useContext(UserContext)
    const userTechList = user.techs

    const addTechToList = () => {
        
    }

    return (
        <StyledTechListHeader>
            <h2>Tecnologias</h2>
            <SmallGrayButton/>
        </StyledTechListHeader>
    )
}