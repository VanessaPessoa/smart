import styled from "styled-components";

const ButtonPrimary = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 16px;
    width: 406px;
    height: 50px;
    background: linear-gradient(180deg, #8DF2B8 0%, #2ECC71 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-bottom: 20px;
`;

const TitlePrimary = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.003em;
    color: #FFFFFF;
`;

const ButtonSecundary = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 16px;
    width: 406px;
    height: 50px;
    background: #F5F5F5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`;

const TitleSecundary = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.003em;
    color: #4BD887;
`;


export {
    ButtonPrimary,
    TitlePrimary,
    ButtonSecundary,
    TitleSecundary
}