import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyledParagraph } from "../../styles/typography/style"
import { TechItem } from "../TechItem"
import { StyledTechList } from "./style"

export const TechList = () => {
    const {user} = useContext(UserContext)
    const userTechList = user.techs
    const userTech = userTechList.map(tech => <TechItem tech={tech} key={userTechList.length + 1} /> )


    return (
        <StyledTechList>
            {userTechList.length > 0 ? userTech : <StyledParagraph>Você ainda não possui tecnologias cadastradas</StyledParagraph>}
        </StyledTechList>
    )
}