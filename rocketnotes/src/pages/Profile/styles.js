import styled from "styled-components"
import {Link} from "react-router-dom"

export const Container = styled.div`
    width: 100%; 
    
`

export const Header = styled.header`
    width: 100%;
    height: 144px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding: 0 124px;

    svg {
        font-size: 25px;
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 8px;

    >div:nth-child(3) {
    margin-top: 15px;
    }
`

export const Avatar = styled.div`
    width: 144px;
    height: 144px;
    margin: -84px auto 70px;
    position: relative;

    > img {
        width: 144px;
        height: 144px;
        border-radius: 50%;
    }

    > label {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        right: 0px;
        bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: ${({theme}) => theme.COLORS.ORANGE};
        
        svg {
            width: 24px;
            height: 24px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        }

        input {
            display: none;
        }
    }
`
export const Back = styled(Link)`
    > svg {
        color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }
`
 