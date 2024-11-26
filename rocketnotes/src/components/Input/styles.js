import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > input {
        width: 100%;
        background-color: transparent;
        border: 0;
        padding: 10px;
        font-size: 16px;
    }

    > svg {
        margin-left: 16px;
    }
`
