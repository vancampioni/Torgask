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

    .nome-tarefa {
        display: flex;
        width: 100%;
        height: 50px;

        input {
            width: 600px;
            height: 30px;
            text-align: center;
            position: static;
            border-radius: 10px;
            border: none;
            font-family: arial;
            font-size: 18px;
            font-weight: bold;
            color: #707070;
            padding-top: 15px;
        }
    }

    .anotacao-tarefa {
        display: flex;
        
        
        input {
            width: 500px;
            height: 120px;
            border-radius: 10px;
            margin: 10px 50px
            
        }
    }

    .texto-anotacao {
        font-family: arial;
        color: #707070;
        margin-left: 10px;
    }

    .assunto-tarefa {
        display: flex;
        margin-left: 50px;
        padding-bottom: 15px;
        span {
            color: #707070;
            margin-right: 5px;
            margin-top: 6px;
        }
        input {
            width: 80px;
            height: 25px;
            border-radius: 10px;
            color: #FFF;
            background: #C409FB;
            font-family: arial;
            font-weight: bold;
            text-align: center;
            font-size: 16px;
        }
    }

    .data-tarefa {
        display: flex;
        width: 45%;
        flex-direction: left;
        align-items: left;
        color: #707070;
        margin-left: 48px;
        margin-top: -5px;
    }

    .concluida {
        display: flex;
        flex-direction: left;
        align-items: center;
        margin-left: 47px;
        color: #707070;

        .buttons {
            display: flex;
            width: 80%;
            justify-content: right;
        }

        button {
            align-items: right;
            height: 27px;
            color: #707070;
            border-radius: 5px;
            border: 1px solid #707070;
            cursor: pointer;
            font-weight: bold;
            margin-left: 10px;

            &:hover {
                opacity: 50%;
            }
        }

        #excluir-button {
            background: pink;
        }
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: arial;
    color: #FFF;
    margin-bottom: 40px

    span {
        
    }

    input {
        background: none;
        border: none;
        border: 1px solid #707070;
        padding: 10px;
        color: #FFF;
    }
    
`

export const Date = styled.div`
    width: 100%;
    display: flex;
    flex-direction: line;
    margin-top: 0px;
    margin-left: -5px;
    color: #707070;
    margin-bottom: 15px;

    span {
        margin: 5px;
    }
`