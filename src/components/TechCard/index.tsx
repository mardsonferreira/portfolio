import { Container, Content, TechButton, TechGrid, TechTitle, Title} from "./styles";

export function TechCards() {
    const techs = ["JAVASCRIPT", "REACTJS", "NODEJS", "GIT", "GITHUB", "HTML", "CSS", "ELIXIR", "REACT NATIVE"];

    return (
        <Container>
            <Title>
                Tecnologies
            </Title>

            <Content>
                <TechGrid>
                    {techs.map((tech) => (
                        <TechButton>
                            <TechTitle>
                                {tech}
                            </TechTitle>
                        </TechButton>
                    ))}
                </TechGrid>
            </Content>
        </Container>
    )
}