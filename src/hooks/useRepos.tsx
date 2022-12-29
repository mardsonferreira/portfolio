import { useState, useEffect } from "react";
import api from "../services/api";

type RepositoryProps = {
    id: number;
    title: string;
    description: string;
    forks: number;
    stars: number;
    language: string;
};

const useRepos = (perPage = 6, pageNum = 1) => {
    const [repos, setRepos] = useState<RepositoryProps[]>([]);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function loadRepos(perPage = 6, pageNum = 1, options = {}) {
        const response = await api.get(
            `/users/mardsonferreira/repos?per_page=${perPage}&page=${pageNum}`,
            options
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

        return _repos;
    }

    useEffect(() => {
        setIsLoading(true);

        const controller = new AbortController();
        const { signal } = controller;

        loadRepos(perPage, pageNum, { signal })
            .then((data) => {
                setRepos((prev) => [...prev, ...data]);
                setHasNextPage(Boolean(data.length));
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                if (signal.aborted) return;
            });

        return () => controller.abort();
    }, [perPage, pageNum]);

    return { repos, hasNextPage, isLoading };
};

export default useRepos;
