import styled from "styled-components";

const Input = styled.input` 
    border-bottom: 1px solid #4B6621;;
    width: 400px;
    height: 32px;
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

    color: #4B6621;
    margin-bottom: 10px;    
`;


export {
    Input,
    MessageError,
    Label
}