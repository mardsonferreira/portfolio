import { useState } from "react";
import {
    Container,
    ProjectHeader,
    ProjectHeaderLink,
    ProjectContent,
} from "./styles";

import { ProjectCard } from "../../components/ProjectCard";

import useRepos from "../../hooks/useRepos";
import { useRef } from "react";
import { useCallback } from "react";

export function Repos() {
    const ReposPerPage = 10;
    const [pageNum, setPageNum] = useState(1);
    const { repos, hasNextPage, isLoading } = useRepos(ReposPerPage, pageNum);

    const intObserver = useRef<null | IntersectionObserver>(null);

    const lastRepoRef = useCallback(
        (repo: any) => {
            if (isLoading) {
                return;
            }

            if (intObserver.current) {
                intObserver.current.disconnect();
            }

            intObserver.current = new IntersectionObserver((repos) => {
                if (repos[0].isIntersecting && hasNextPage) {
                    setPageNum((prev) => prev + 1);
                }
            });

            if (repo) {
                intObserver.current.observe(repo);
            }
        },
        [hasNextPage, isLoading]
    );

    const repoContent = repos.map((repo, index) => {
        if (repos.length === index + 1) {
            return <ProjectCard ref={lastRepoRef} key={repo.id} repo={repo} />;
        }
        return <ProjectCard key={repo.id} repo={repo} />;
    });

    return (
        <Container>
            <ProjectHeader>
                <ProjectHeaderLink to="/">Go back</ProjectHeaderLink>
            </ProjectHeader>

            <ProjectContent>{repoContent}</ProjectContent>
        </Container>
    );
}
