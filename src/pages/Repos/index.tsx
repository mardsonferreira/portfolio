import {
    Container,
    ProjectHeader,
    ProjectHeaderLink,
    ProjectContent,
} from "./styles";

import { ProjectCard } from "../../components/ProjectCard";

import api from "../../services/api";
import { useEffect, useState } from "react";

type RepositoryProps = {
    id: number;
    title: string;
    description: string;
    forks: number;
    stars: number;
    language: string;
};

export function Repos() {
    const [repos, setRepos] = useState<RepositoryProps[]>([]);

    useEffect(() => {
        async function loadRepos() {
            try {
                const response = await api.get(
                    "/users/mardsonferreira/repos?per_page=10&page=1"
                );

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
            } catch (err) {
                console.log(err);
            }
        }

        loadRepos();
    }, []);

    return (
        <Container>
            <ProjectHeader>
                <ProjectHeaderLink to="/">Go back</ProjectHeaderLink>
            </ProjectHeader>

            <ProjectContent>
                {repos.map((repo) => (
                    <ProjectCard key={repo.id} repo={repo} />
                ))}
            </ProjectContent>
        </Container>
    );
}
