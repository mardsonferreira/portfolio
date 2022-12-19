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
`;

const AvatarContainer = styled.div`
    width: 128px;
    height: 128px;
    border-radius: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--bg-profile);

    margin-top: 32px;
`;

const Avatar = styled.img`
    width: 124px;
    height: 124px;
    border-radius: 62px;
`;

const Title = styled.span`
    font-size: 23px;
    font-weight: 700;
    color: var(--text-color);

    margin-top: 32px;
`;

const Subtitle = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: var(--text-color);

    margin-top: 8px;
    margin-bottom: 32px;

`;

export { Container, Avatar, Title, Subtitle, AvatarContainer };
