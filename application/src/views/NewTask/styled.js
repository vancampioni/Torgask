import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: arial;
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

export const Form = styled.div`
    width: 50%;
    margin-top: 50px;
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

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

export const Date = styled.div`
    width: 100%;
    display: flex;
    flex-direction: line;
    margin-top: 30px;
    color: #FFF;
    margin-bottom: 10px;

    span {
        margin: 5px;
    }
`

export const Options = styled.div`
    
    color: #FFF;

    span {
        width: 100%;
        margin-bottom: 50px;
        button {
            height: 30px;
            border: none;
            border-radius: 5px;
            margin: 5px;
            margin-bottom: 20px;
            cursor: pointer;
        }
    }

    #confirmar {
        background: #9EFA97
    }

    #cancelar {
        background: #FFBEBE
    }

    select {
        width: 50%;
        height: 35px;
        margin-bottom: 10px;
    }
`


