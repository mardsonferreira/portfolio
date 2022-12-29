import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 16px 32px;
`;

const ProjectHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 86px;
    width: 100%;

    border-radius: 16px;

    padding: 16px 24px;

    background: var(--bg-cards);
`;

const ProjectHeaderLink = styled(Link)`
    font-size: 13px;
    font-weight: 400;
    color: var(--text-color);
`;

const ProjectContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    margin-top: 8px;
`;

export { Container, ProjectHeader, ProjectHeaderLink, ProjectContent };
