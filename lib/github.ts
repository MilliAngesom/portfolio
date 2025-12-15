export interface GithubRepo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
}

export async function getPinnedRepos(): Promise<GithubRepo[]> {
    try {
        const response = await fetch('https://api.github.com/users/MilliAngesom/repos?sort=updated&per_page=6');
        if (!response.ok) {
            return [];
        }
        const repos = await response.json();
        return repos.map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            language: repo.language,
        }));
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}
