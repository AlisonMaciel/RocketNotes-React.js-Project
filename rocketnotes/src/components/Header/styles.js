import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.header`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 105px;
    padding: 0 80px;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 74px;
        height: 74px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;

        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        };
    }
`

export const Logout = styled.button`
    border: 0;
    background: none;

    > svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }

    > svg:hover {
        font-size: 38px;
    }
`