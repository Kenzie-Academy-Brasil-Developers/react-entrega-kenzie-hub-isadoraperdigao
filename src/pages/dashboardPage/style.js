import styled from "styled-components";

export const StyledDashboardPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const StyledDashboardHeader = styled.header`
    width: 90%;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    margin-top: 1.75rem;
`

export const StyledDashboardContentContainer = styled.div`
    width: 90%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    

    span {
        color: var(--color-gray-1);
        font-size: 0.75rem;
        font-weight: 600;
    }

    div {
        display: none;
    }

    div > p {
        color: var(--color-white);
        font-size: 1rem;
        font-weight: 400;
        margin-top: 1.438rem;
    }

    @media (min-width: 960px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 2.813rem 0;

        div {
            display: block;
        }
    }
`

export const StyledUserCard = styled.div`
    width: 100vw;
    border: 1px solid var(--color-gray-3);
    padding: 2.188rem 0.75rem;
    margin-top: 1.875rem;
    display: flex;
    justify-content: center;

    
`