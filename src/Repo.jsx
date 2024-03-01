const Repo = ({ repo }) => {
    const { name } = repo;

    return <li>Repo name: {name}</li>
}

export default Repo;