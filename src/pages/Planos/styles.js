import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 30px;
    
    li {
        width: 500px;
        border: 1px solid black;
        padding: 10px;
        margin-top: 30px;
    }

    li div {
        margin-bottom: 10px;
    }
`;

export const List = styled.ul`
    list-style: none;

    .container-baixo {
        display:flex;
        justify-content: space-between;
    }
`;

export const Titulo = styled.h1`
    font-size: 30px;
`
export const Botao = styled.button`
    margin-top: 30px;
    font-size: 20px;
    padding: 5px;
    background-color: black;
    border-radius: 5px;
    padding: 3px 20px;
`






