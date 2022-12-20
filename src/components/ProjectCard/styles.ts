import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    background: var(--bg-cards);
    color: var(--text-color);

    padding: 32px;

    border-radius: 16px;

    margin-top: 16px;

    gap: 16px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 8px;
`;

const Description = styled.span``;

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const RepoInfo = styled.div`
    display: flex;

    gap: 16px;
`;

const Star = styled.div`
    display: flex;
    align-items: flex-end;

    gap: 8px;
`;

const Fork = styled.div`
    display: flex;
    align-items: flex-end;

    gap: 8px;
`;

const RepoInfoTitle = styled.span`
    font-size: 15px;
`;

const Language = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;
`;

const LanguageIconWrapper = styled.div`
    height: 15px;
    width: 15px;

    background-color: var(--text-color);

    border-radius: 7px;
`;

const LanguageIcon = styled.div`
    height: 14px;
    width: 14px;

    background-color: var(--bg-language);

    border-radius: 7px;
`;

export {
    Container,
    Header,
    Description,
    Footer,
    RepoInfo,
    Star,
    Fork,
    RepoInfoTitle,
    Language,
    LanguageIconWrapper,
    LanguageIcon,
};
