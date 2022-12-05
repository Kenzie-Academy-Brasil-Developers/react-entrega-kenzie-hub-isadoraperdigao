import { StyledGrayButton } from "./style"

export const GrayButton = ({text, action}) => {
    return (
        <StyledGrayButton onClick={action}>{text}</StyledGrayButton>
    )
}