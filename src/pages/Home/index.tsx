import { Profile } from "../../components/Profile";
import { PersonalInfo } from "../../components/PersonalInfo";

import {
    Container,
    LeftSide,
    ProjectHeader,
    ProjectHeaderLink,
    ProjectHeaderTitle,
    RightSide,
    ProjectContent,
} from "./styles";

import { TechCards } from "../../components/TechCard";
import { ProjectCard } from "../../components/ProjectCard";

import useRepos from "../../hooks/useRepos";

export function Home() {
    const { repos } = useRepos();

    return (
        <Container>
            <LeftSide>
                <Profile />

                <PersonalInfo />

                <TechCards />
            </LeftSide>

            <RightSide>
                <ProjectHeader>
                    <ProjectHeaderTitle>My Projects</ProjectHeaderTitle>

                    <ProjectHeaderLink to="/repos">See All</ProjectHeaderLink>
                </ProjectHeader>

                <ProjectContent>
                    {repos.map((repo) => (
                        <ProjectCard key={repo.id} repo={repo} />
                    ))}
                </ProjectContent>
            </RightSide>
        </Container>
    );
}
