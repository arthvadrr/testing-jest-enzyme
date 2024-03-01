import React from 'react';

interface RepoProps {
    repo: {
        name: string;
    };
}

const Repo: React.FC<RepoProps> = ({ repo }) => {
    const { name } = repo;

    return <li>Repo name: {name}</li>;
};

export default Repo;