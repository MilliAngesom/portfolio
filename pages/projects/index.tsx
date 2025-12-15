import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { getSortedProjectsData, ProjectData } from '@/lib/mdx';
import { getPinnedRepos, GithubRepo } from '@/lib/github';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

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
                                <Github className="mr-2" /> Recent GitHub Activity
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
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{repo.name}</h3>
                                            <p className="text-gray-600 mb-4 flex-grow line-clamp-3 overflow-hidden text-ellipsis">
                                                {repo.description || "No description available."}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                                                <span className="flex items-center">
                                                    <span className={`w-3 h-3 rounded-full mr-2 ${getLanguageColor(repo.language)}`}></span>
                                                    {repo.language || 'Unknown'}
                                                </span>
                                                <span className="flex items-center">
                                                    ★ {repo.stargazers_count}
                                                </span>
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
    switch (language) {
        case 'TypeScript': return 'bg-blue-500';
        case 'JavaScript': return 'bg-yellow-400';
        case 'Python': return 'bg-green-500';
        case 'C++': return 'bg-pink-500';
        case 'HTML': return 'bg-orange-500';
        default: return 'bg-gray-400';
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
