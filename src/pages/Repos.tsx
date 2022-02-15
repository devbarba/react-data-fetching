import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Repository from '../types/repository';

export function Repos() {
    const { data: repositories, isFetching } = useFetch<Repository[]>('repos', 'GET', 'users/devbarba/repos');

  return (
    <ul>
        { isFetching && <p>Loading...</p>}
        {repositories?.map(repository => {
            return (
                <li key={repository.full_name}>
                    <Link to={`repos/${repository.full_name}`}>
                        {repository.full_name}
                    </Link>
                    <p>{repository.description}</p>
                </li>
            )
        })}
    </ul>
  )
}