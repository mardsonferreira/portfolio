import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: var(--bg-cards);

    padding: 16px;

    border-radius: 16px;

    margin-top: 16px;

    gap: 16px;
`;

const PersonalInfoCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const PersonalInfoTitle = styled.span`
    font-size: 13px;
    color: var(--text-color);

    margin-left: 16px;
`;

export { Container, PersonalInfoCard, PersonalInfoTitle };
