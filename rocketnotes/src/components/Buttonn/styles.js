import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    height: 56px;

    background: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    border-radius: 10px;
    border: 0;

    font-weight: 500;
    font-size: 16px;

    margin-top: 16px;

    &:disabled {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};;
    }
    
`
