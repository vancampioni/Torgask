import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 60px;

    button {
       background: none;
       border: none; 
    }
`
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