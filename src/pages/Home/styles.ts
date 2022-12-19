import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 32px;
`;

const LeftSide = styled.div`
    width: 25%;

    display: flex;

    flex-direction: column;
`;

const RightSide = styled.div`
    width: 70%;

    display: flex;
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

const ProjectHeaderTitle = styled.span`
    font-size: 23px;
    font-weight: 700;
    color: var(--text-color);
`;

const ProjectHeaderLink = styled.a`
    font-size: 13px;
    font-weight: 400;
    color: var(--text-color);
`;

export {
    Container,
    LeftSide,
    RightSide,
    ProjectHeader,
    ProjectHeaderTitle,
    ProjectHeaderLink,
};
