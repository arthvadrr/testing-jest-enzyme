import '@testing-library/jest-dom';
import {render, screen, waitFor} from '@testing-library/react';
import RepoList from '../RepoList';

const mockData = [{name: 'repo1'}, {name: 'repo2'}];

const mockFetch = (data: any, ok: boolean = true) =>
    jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok,
            json: () => Promise.resolve(data),
        })
    );

test('renders loading state initially', async () => {
    global.fetch = mockFetch(mockData);
    render(<RepoList/>);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for data to be fetched
    await waitFor(() => {
        expect(screen.queryByText('Loading...')).toBeNull();
    });
});

test('renders repositories', async () => {
    global.fetch = mockFetch(mockData);

    render(<RepoList/>);

    await waitFor(() => {
        expect(screen.getByText('Repo name: repo1')).toBeInTheDocument();
        expect(screen.getByText('Repo name: repo2')).toBeInTheDocument();
    });
});

test('handles fetch error', async () => {
    global.fetch = mockFetch(null, false);

    render(<RepoList />);

    await waitFor(() => {
        expect(screen.getByText('Error loading repositories: Failed to fetch repositories')).toBeInTheDocument();
    });
});