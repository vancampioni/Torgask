import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 200px;
    background: #484040;
    box-shadow: 1px 1px 3px #FFF;
    cursor: pointer;
    color: #FFF;
    font-family: arial;
    cursor: pointer;
    transition: all 0.3s ease; 

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;
    margin-top: 40px;

    &:hover {
        opacity: 0.5;
    }
    
`

export const TopArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid #707070;
`
export const Subject = styled.div`
    width: 200px;
    height: 40px;
    font-weight: bold;
    background: #C409FB;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    display: flex;
`

export const BottomArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong {
        font-weight: bold;
    }

    span {
        color: #979595;

    }
    
`

