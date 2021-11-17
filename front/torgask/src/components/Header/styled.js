import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #C409FB;
    border-bottom: 5px solid #FFFFFF;

    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 5px;

    img {
        width: 170px;
        height: auto;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: arial;

    a {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px; 

        &:hover {
            color: #484040;
        }
    }

    #notification {
        img {
            width: 27px;
            height: auto;
            color: #FFF;
        }

        span {
            background: #F82323;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }

        &:hover {
            opacity: 0.6;
        }

    }

    .dividir:: after {
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }
`