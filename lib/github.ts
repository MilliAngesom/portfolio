export interface GithubRepo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    license?: { spdx_id: string };
    readme_excerpt?: string;
}

export async function getPinnedRepos(): Promise<GithubRepo[]> {
    try {
        // Fetch all repos (up to 100)
        const response = await fetch('https://api.github.com/users/MilliAngesom/repos?sort=updated&per_page=100');
        if (!response.ok) {
            console.error('GitHub API error:', response.statusText);
            return [];
        }
        const repos = await response.json();

        // Sort by stars descending and take top 6
        const topRepos = repos
            .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);

        // Fetch READMEs for top repos
        const enrichedRepos = await Promise.all(topRepos.map(async (repo: any) => {
            let excerpt = repo.description;
            try {
                const readmeRes = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/readme`, {
                    headers: { 'Accept': 'application/vnd.github.v3.raw' }
                });
                if (readmeRes.ok) {
                    const text = await readmeRes.text();
                    // Strip markdown and tags loosely
                    const cleanText = text.replace(/[#*`\[\]]/g, '').replace(/\n+/g, ' ').trim();
                    excerpt = cleanText.substring(0, 200) + '...';
                }
            } catch (e) {
                console.error(`Error fetching README for ${repo.name}`, e);
            }

            return {
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                stargazers_count: repo.stargazers_count,
                language: repo.language,
                license: repo.license,
                readme_excerpt: excerpt
            };
        }));

        return enrichedRepos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}
