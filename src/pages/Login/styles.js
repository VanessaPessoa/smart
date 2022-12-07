import styled from "styled-components";
import image from "../../image/background.png"

const Container = styled.div`
    background-image: url(${image});  
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    gap: 20px;

    position: relative;
    width: 480px;
    height: 411px;

    background: #F5F5F5;
    /* Drop Shadow

    shadow
    */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
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
    /* identical to box height */


    color: #2ECC71;
`;

export {
    Container,
    Card,
    CardLink,
    Link
}