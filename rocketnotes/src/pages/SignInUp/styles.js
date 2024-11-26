import styled from "styled-components"

import BackgroundImg from "../../assets/Group 15.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
`

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    gap: 8px;
    
    > h1 {
        font-size: 48px;
        font-weight: 700;
        line-height: 63px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    >h2 {
        font-size: 24px;
        line-height: 32px;
        margin: 48px 0px;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > a {
        font: 16px;
        color: ${({theme}) => theme.COLORS.ORANGE};
        margin-top: 65px;
    }
`