import Layout from '@/components/Layout';
import { getAllProjectSlugs, getProjectData, ProjectData } from '@/lib/mdx';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { motion } from 'framer-motion';

interface ProjectPageProps {
    projectData: ProjectData;
    mdxSource: MDXRemoteSerializeResult;
}

export default function Project({ projectData, mdxSource }: ProjectPageProps) {
    const components = {
        // Define custom components here if needed for MDX
        // img: (props: any) => <img {...props} className="rounded-xl shadow-lg my-8" />,
    };

    return (
        <Layout title={`${projectData.title} - Million Angesom Asefaw`}>
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <header className="mb-8">
                        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">{projectData.title}</h1>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {projectData.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-teal-50 text-accent text-sm rounded-full font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-xl text-gray-600 border-l-4 border-accent pl-4 italic">
                            {projectData.summary}
                        </p>
                    </header>

                    <div className="prose lg:prose-xl text-gray-800 bg-white p-8 rounded-2xl shadow-sm">
                        <MDXRemote {...mdxSource} components={components} />
                    </div>
                </motion.div>
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllProjectSlugs();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const projectData = await getProjectData(params?.slug as string);
    const mdxSource = await serialize(projectData.content);
    return {
        props: {
            projectData,
            mdxSource,
        },
    };
};
