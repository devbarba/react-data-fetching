import { useFetch } from './hooks/useFetch'
import Repository from './types/repository';

function App() {
    const { data: repositories, isFetching } =
        useFetch<Repository[]>('users/devbarba/repos');

  return (
    <ul>
        { isFetching && <p>Carregando...</p>}
        {repositories?.map(repository => {
            return (
                <li key={repository.full_name}>
                    <strong>{repository.full_name}</strong>
                    <p>{repository.description}</p>
                </li>
            )
        })}
    </ul>
  )
}

export default App
