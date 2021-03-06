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


    .anotacao-meta {
        display: flex;
        
        
        input {
            width: 500px;
            height: 120px;
            border-radius: 10px;
            margin: 10px 50px
            
        }
        
    }

    .texto-anotacao {
        margin-top: 10px;
        font-family: arial;
        color: #707070;
    }

    .mostrar-tarefas {
        display: flex;
        width: 84%;
        justify-content: flex-end;
        flex-direction: left;
        align-items: center;
        margin-left: 50px;
        margin-top: 0;
        color: #707070;

        .btn-mostrar-tarefas {
            width: 70px;
            height: auto;
            color: #FFF;
            background: #707070;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            font-weight: bold;
            margin-left: 10px;

            &:hover {
                opacity: 50%;
            }
        }

        .nova-tarefa {
            display-flex;
            width: 70%;
            height: 27px;
            align-items: center;
            justify-content: center;
            height: 27px;

        }
    }

    .data-meta {
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
        width: 100%;
        flex-direction: left;
        align-items: center;
        margin-left: 47px;
        color: #707070;

        .buttons {
            display: flex;
            width: 75%;
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
    margin-left: 42px;
    color: #707070;
    margin-bottom: 15px;

    span {
        margin: 5px;
    }
`