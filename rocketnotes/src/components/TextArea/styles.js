import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    border-radius: 16px;
    border: none;
    resize: none;
    
    padding: 16px;
    margin-top: 18px;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }

`