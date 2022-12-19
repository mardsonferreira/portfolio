import { Avatar, AvatarContainer, Container, Subtitle, Title } from "./styles";

export function Profile() {
    return (
        <Container>
            <AvatarContainer>
                <Avatar src="https://github.com/mardsonferreira.png" />
            </AvatarContainer>
            
            <Title>Mardson Ferreira</Title>
            
            <Subtitle>Full Stack Developer</Subtitle>
        </Container>
    );
}
