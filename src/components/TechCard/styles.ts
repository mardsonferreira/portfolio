import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    background: var(--bg-cards);

    padding: 16px;

    border-radius: 16px;

    margin-top: 16px;

    gap: 16px;
`;

const Title = styled.span`
    font-size: 23px;
    font-weight: 700;
    color: var(--text-color);

    margin-top: 8px;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TechGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
`;

const TechButton = styled.button`
    background-color: var(--bg-techs);

    padding: 8px;

    border-radius: 16px;
`;

const TechTitle = styled.span`
    font-weight: bold;
`;

export { Container, Title, Content, TechButton, TechGrid, TechTitle };
