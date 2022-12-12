import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"
import { StyledParagraph } from "../../styles/typography/style"
import { TechItem } from "../TechItem"
import { StyledTechList } from "./style"

export const TechList = () => {
    const {techsList} = useContext(TechContext)


    const userTech = techsList.map((tech) => <TechItem tech={tech} key={tech.id} id={tech.id} /> )


    return (
        <StyledTechList>
            {techsList.length > 0 ? userTech : <StyledParagraph>Você ainda não possui tecnologias cadastradas</StyledParagraph>}
        </StyledTechList>
    )
}