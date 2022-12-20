import { useEffect, useState } from "react";
import { Profile } from "../../components/Profile";
import { PersonalInfo } from "../../components/PersonalInfo";

import {
    Container,
    LeftSide,
    ProjectHeader,
    ProjectHeaderLink,
    ProjectHeaderTitle,
    RightSide,
    ProjectContent
} from "./styles";
import { TechCards } from "../../components/TechCard";

import api from "../../services/api";
import { ProjectCard } from "../../components/ProjectCard";

type RepositoryProps = {
    id: number;
    title: string;
    description: string;
    forks: number;
    stars: number;
    language: string;
};

export function Home() {
    const [repos, setRepos] = useState<RepositoryProps[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadRepos() {
            try {
                setLoading(true);
    
                const response = await api.get("/users/mardsonferreira/repos");
    
                const _repos = response.data.map((repo: any) => {
                    return {
                        id: repo.id,
                        title: repo.name,
                        description: repo.description,
                        forks: repo.forks_count,
                        stars: repo.stargazers_count,
                        language: repo.language,
                    };
                });

                setRepos(_repos);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        }

        loadRepos();
    }, []);
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

                    <ProjectHeaderLink>See All</ProjectHeaderLink>
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
