import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 50px;
    background: #C409FB;
    border-top: 5px solid #FFFFFF;

    position: fixed;
    bottom: 0;    
`

export const SocialMedias = styled.div`
    img {
        width: 15px;
        height: auto;
        padding-top: 5px;
        padding-right: 10px;
    }

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Copyright = styled.div`
    img {
        width: 15px;
        height: auto;
        padding-right: 3px;
        padding-top: 8px;
    }

    span {
        color: #9E8282;
        padding-top: 5px;
        font-size: 15px;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    
`