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
    padding-top: 90px;
    padding-left: 550px;

    img {
        width: 270px;
        height: auto;
        
}
`


export const Form = styled.div `

    .login-page {
        width: 360px;
        padding: 3% 0 0;
        margin: auto;
        display: flex;
        
        
    }

    .form input {
        font-family: "Arial", sans-serif;
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
        border-radius: 10px;
      }

      .form button {
        color: #484040;
        font-weight: bold;
        text-decoration: none;
        margin: 20px 140px; 
        padding: 8px;
        border-radius: 10px;
        background-color: #FFF
        align-items: center;
        

        &:hover {
            color: #FFF;
        }
      }
`