import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #707070;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    
    h3 {
        color: #FFF;
        font-family: arial;
        font-weight: bold;
        position: relative;
        top: 30px;
        background: #484040;
    }

    
`

export const DetailsArea = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
`

export const DetailsBox = styled.div`
    width: 600px;
    height: 320px;
    background: #FFF;
    border-radius: 10px;
    margin-top: 40px;
    border: 1px solid black;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: arial;

    .nome-meta {
        border-bottom: 1px solid #707070;
        color: #707070;
    }

    .anotacao-meta {
        border: 1px solid #707070;
        width: 500px;
        height: 120px;
        border-radius: 10px;
        margin: 10px 50px
        
    }

    .texto-anotacao {
        margin-top: 10px;
        font-family: arial;
        color: #707070;
    }

    .assunto-meta {
        display: flex;
        flex-direction: left;
        align-items: center;
        margin-left: 50px;
        color: #707070;

        button {
            width: 50px;
            height: 20px;
            color: #FFF;
            background: green;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            font-weight: bold;
            margin-left: 10px;
        }
    }

    .data-meta {
        display: flex;
        width: 80%;
        flex-direction: left;
        align-items: center;
        justify-content: space-around;
        color: #707070;
        margin-left: 35px;
        margin-top: -5px;
    }

    .concluida {
        display: flex;
        flex-direction: left;
        align-items: center;
        margin-left: 47px;
        margin-top: 10px;
        color: #707070;
    }
`