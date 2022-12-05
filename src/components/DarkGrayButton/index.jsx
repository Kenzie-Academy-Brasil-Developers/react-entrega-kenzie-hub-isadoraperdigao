import { StyledDarkGrayButton } from "./style"

export const DarkGrayButton = ({text, width, action}) => {
    return (
        <StyledDarkGrayButton width={width} onClick={action}>{text}</StyledDarkGrayButton>
    )
}