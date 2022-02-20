import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Text = styled.div`
    font-family: Arial;
    text-align: center;
    color: #FFF;
    margin-top: 20px;

    h1 {
        display: inline;
        font-size: 50px;
    }

    h3 {
        display: inline;
        width: 500px;
    }

    #logo {
        width: 200px;
        padding-top: 20px;
        margin-bottom: -13px;
        margin-left: -10px;
        
    }

    #smile-wink {
        width: 30px;
        heigth: auto;
        margin-top: 50px;
        margin-left: 10px;
    }

    p {
        margin-top: 100px;
        font-weight: bold;
    }

    button {
        color: #484040;
        font-weight: bold;
        text-decoration: none;
        margin: 20px 140px; 
        padding: 8px;
        border-radius: 10px;
        background-color: #FFF
        align-items: center;
        cursor: pointer;

        &:hover {
            color: #FFF;
        }
    }

    div {

    }
`