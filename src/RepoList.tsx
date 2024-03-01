import React, {useEffect, useReducer, useState} from 'react';
import {actionTypes, initialState} from './reducer';
import reducer from './reducer';
import Repo from './Repo';

interface RepoListProps {
}

const RepoList: React.FC<RepoListProps> = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch('https://api.github.com/users/arthvadrr/repos?visibility=public&sort=updated&direction=desc&per_page=999');
                const data = await response.json();
                dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data });
            } catch (error) {
                setErr(true);
                dispatch({ type: actionTypes.FETCH_REQUEST, payload: error });
            } finally {
                setLoading(false);
            }
        };

        fetchData().finally();
    }, []);


    useEffect(() => {
        setErrMsg('Error loading repositories: Failed to fetch repositories')
    }, [err]);

    return (
        <>
            <ul>
                {errMsg}
                {!loading &&
                    state.repositories.length > 0 &&
                    state.repositories.map((repo, i) => <Repo key={`repo-${i}`} repo={repo}/>)
                }
                {err &&
                    <li>{err}</li>
                }
                {loading &&
                    <div>Loading...</div>
                }
            </ul>
        </>
    );
};

export default RepoList;