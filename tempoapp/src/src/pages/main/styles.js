import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Form = styled.form `
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: block;

    input {
        display: block;
        width: 100%;
        height: 35px;
        padding: 0 10px;
        background: #fff;
        border: 0;
        color: #444;
        border-radius: 3px;
        outline: 0;
    }

    button {
        height: 55px;
        padding: 0 20px;
        background: #6290C3;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;
        color: #fff;
        width: 100%;

        &:hover {
            background: #2D4259;
            cursor: pointer;
        }
    }
`;

export const Div = styled.div`
    flex: 1;
    
    border-radius: 3px;
    margin: 0 10px 0 20px;
    list-style: none;
    display:flex;
    flex-direction: column;

    ul {
        list-style: none;

        li {
            font-weight: bold;
        }
    } 
`;