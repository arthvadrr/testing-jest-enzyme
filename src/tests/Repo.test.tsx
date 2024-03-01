import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Repo from '../Repo';

test('renders repo name correctly', () => {
    const repo = { name: 'TestRepo' };
    render(<Repo repo={repo} />);
    const repoElement = screen.getByText('Repo name: TestRepo');
    expect(repoElement).toBeInTheDocument();
});