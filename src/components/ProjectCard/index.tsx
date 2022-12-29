import {
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
} from "./styles";

import { ReactComponent as FolderIcon } from "../../assets/folder.svg";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import { ReactComponent as GitBranch } from "../../assets/git-branch.svg";
import React from "react";

type Repository = {
    id: number;
    title: string;
    description: string;
    forks: number;
    stars: number;
    language: string;
};

interface ProjectCardProps {
    repo: Repository;
}

const ProjectCard = React.forwardRef<HTMLElement, ProjectCardProps>(
    ({ repo }: ProjectCardProps, ref) => {
        const repoBody = (
            <Container>
                <Header>
                    <FolderIcon color="#83739f" />
                    {repo.title}
                </Header>

                <Description>{repo.description}</Description>

                <Footer>
                    <RepoInfo>
                        <Star>
                            <StarIcon color="#83739f" />
                            <RepoInfoTitle>{repo.stars}</RepoInfoTitle>
                        </Star>

                        <Fork>
                            <GitBranch color="#83739f" />
                            <RepoInfoTitle>{repo.forks}</RepoInfoTitle>
                        </Fork>
                    </RepoInfo>

                    <Language>
                        <LanguageIconWrapper>
                            <LanguageIcon></LanguageIcon>
                        </LanguageIconWrapper>
                        {repo.language}
                    </Language>
                </Footer>
            </Container>
        );

        const content = ref ? (
            <article ref={ref}>{repoBody}</article>
        ) : (
            <article>{repoBody}</article>
        );

        return content;
    }
);

export { ProjectCard };
