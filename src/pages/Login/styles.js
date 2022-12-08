import styled from "styled-components";
import image from "../../image/nrd-D6Tu_L3chLE-unsplash.jpg"

const Container = styled.div`
    background-image: url(${image});  
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 100vh;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    gap: 20px;

    position: absolute;
    width: 600px;
    height: 100vh;
    left: 50%;
    top: 0px;
    background: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CardLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 5px;
    gap: 168px;

    width: 400px;
    height: 35px;
`;

const Link = styled.a`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #4B6621;`;

export {
    Container,
    Card,
    CardLink,
    Link
}