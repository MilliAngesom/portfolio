import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { getSortedProjectsData, ProjectData } from '@/lib/mdx';
import { getPinnedRepos, GithubRepo } from '@/lib/github';
import { motion } from 'framer-motion';
import { Github, Star, Scale, BookOpen } from 'lucide-react';

interface ProjectsProps {
    allProjectsData: ProjectData[];
    githubRepos: GithubRepo[];
}

export default function Projects({ allProjectsData, githubRepos }: ProjectsProps) {
    return (
        <Layout title="Projects - Million Angesom Asefaw">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-primary mb-12">Projects</h1>

                    <section className="mb-16">
                        <h2 className="text-2xl font-semibold text-accent mb-6">Featured Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {allProjectsData.map((project) => (
                                <ProjectCard
                                    key={project.slug}
                                    title={project.title}
                                    summary={project.summary}
                                    tags={project.tags}
                                    slug={project.slug}
                                />
                            ))}
                        </div>
                    </section>

                    {githubRepos.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-semibold text-accent mb-6 flex items-center">
                                <Github className="mr-2" /> Top GitHub Repositories
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {githubRepos.map((repo) => (
                                    <a
                                        key={repo.name}
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block h-full"
                                    >
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full border border-gray-100"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-gray-800 truncate flex-1 mr-2">{repo.name}</h3>
                                                <div className="flex items-center text-yellow-500 font-medium">
                                                    <Star className="h-4 w-4 fill-current mr-1" />
                                                    {repo.stargazers_count}
                                                </div>
                                            </div>

                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 italic">
                                                {repo.readme_excerpt || repo.description || "No description."}
                                            </p>

                                            <div className="mt-auto space-y-2">
                                                <div className="flex flex-wrap gap-2 text-xs">
                                                    {repo.language && (
                                                        <span className={`px-2 py-1 rounded-full text-white font-medium ${getLanguageColor(repo.language)}`}>
                                                            {repo.language}
                                                        </span>
                                                    )}
                                                    {repo.license && (
                                                        <span className="flex items-center px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                                            <Scale className="h-3 w-3 mr-1" />
                                                            {repo.license.spdx_id}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-accent text-sm font-medium flex items-center pt-2">
                                                    <BookOpen className="h-3 w-3 mr-1" /> View Repository
                                                </div>
                                            </div>
                                        </motion.div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    )}
                </motion.div>
            </div>
        </Layout>
    );
}

function getLanguageColor(language: string) {
    if (!language) return 'bg-gray-400';
    switch (language.toLowerCase()) {
        case 'typescript': return 'bg-blue-600';
        case 'javascript': return 'bg-yellow-500';
        case 'python': return 'bg-green-600';
        case 'c++': return 'bg-pink-600';
        case 'html': return 'bg-orange-600';
        case 'css': return 'bg-blue-400';
        default: return 'bg-gray-500';
    }
}

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    const githubRepos = await getPinnedRepos();
    return {
        props: {
            allProjectsData,
            githubRepos
        },
        // Revalidate every 12 hours
        revalidate: 43200,
    };
}
