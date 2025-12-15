import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectData {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    content: string;
}

export function getSortedProjectsData(): ProjectData[] {
    // Get file names under /content/projects
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(contentDirectory);
    const allProjectsData = fileNames.map((fileName) => {
        // Remove ".mdx" from file name to get id
        const slug = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            slug,
            ...(matterResult.data as { title: string; date: string; summary: string; tags: string[] }),
            content: matterResult.content,
        };
    });
    // Sort projects by date
    return allProjectsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllProjectSlugs() {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.mdx$/, ''),
            },
        };
    });
}

export async function getProjectData(slug: string): Promise<ProjectData> {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
        slug,
        ...(matterResult.data as { title: string; date: string; summary: string; tags: string[] }),
        content: matterResult.content,
    };
}
