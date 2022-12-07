import styled from "styled-components";

const Input = styled.input` 
    border: 1px solid #2ECC71;
    border-radius: 4px;
    width: 400px;
    height: 32px;
    background: #F5F5F5;
    margin-bottom: 15px;
    :focus-visible {
        outline: #8DF2B8 auto 1px;
    }
`;
const MessageError = styled.p`
    font-size: 12px;
    color: #D95245;
`;
const Label = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #2ECC71;
    margin-bottom: 10px;    
`;


export {
    Input,
    MessageError,
    Label
}