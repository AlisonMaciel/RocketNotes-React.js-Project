import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.WHITE}` : `none`};

    border-radius: 10px;
    margin-top: 16px;
    
    > input {
        width: 100%;
        height: 56px;
        padding: 12px;
        border: none;
        background-color: transparent;
        color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
    }
    
    > button {
        border: none;
        background-color:transparent;
        font-size: 20px;
        margin-right: 5px;
    }
    
    .button-add {
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
    
    .button-delete {
        color: ${({theme}) => theme.COLORS.RED};
    }
    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }

`