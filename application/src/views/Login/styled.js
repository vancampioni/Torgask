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

export const Logo = styled.div`
    width: 80%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-top: 110px;
    padding-left: 600px;

    img {
        width: 270px;
        height: auto;
}
`

export const RightSide = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: arial;
    color: #FFF;

    button {
        color: #484040;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px; 
        padding: 8px;
        border-radius: 10px;
        background-color: #FFF

        &:hover {
            color: #FFF;
        }
    }

    button {
        cursor: pointer;
    }
`

export const Login = styled.div `
    
`