import { useState } from 'react'
import { useFetch } from './hooks/useFetch'

type Repository = {
    full_name: string;
    description: string;
};

function App() {
    const { data: repositories, isFetching } =
        useFetch<Repository[]>('https://api.github.com/users/devbarba/repos');

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
