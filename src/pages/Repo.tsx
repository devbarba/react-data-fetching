import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import Repository from "../types/repository";

export function Repo() {
    const params = useParams();
    const currentRepository = params['*'] as string;

    const queryClient = useQueryClient();

    async function handleChangeRepositoryDescription() {
        const previousRepos = queryClient.getQueryData<Repository[]>(['repos']);

        if (previousRepos) {
            const nextRepos = previousRepos.map(repository => {
                if (repository.full_name === currentRepository) {
                    return { ...repository, description: 'Testing'}
                }

                return repository;
            });

            queryClient.setQueryData('repos', nextRepos);
        }
    }

    return (
        <div>
            <h1>{currentRepository}</h1>
            <button onClick={handleChangeRepositoryDescription}>Change repository description</button>
        </div>
    )
}