import styled from 'styled-components';

export const Container = styled.div`
    width: 230px;
    height: 60px;
    background: #C409FB;
    opacity: ${props => props.actived ? '50%;' : '100%;'};
    padding: 10px;
    cursor: pointer;

    border-radius: 15px;

    display: flex;
    flex-direction: column; 
    justify-content: space-around;

    img {
        width: 25px;
        height: 36px;
    }

    span {
        color: #FFF;
        font-family: arial;
        font-weight: bold;
        font-size: 25px;
        align-self: flex-end;
    }

    &:hover {
        opacity: 50%;
    }
`
