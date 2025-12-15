import Layout from '@/components/Layout';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { motion } from 'framer-motion';

interface CVProps {
    mdxSource: MDXRemoteSerializeResult;
}

export default function CV({ mdxSource }: CVProps) {
    return (
        <Layout title="Curriculum Vitae - Million Angesom Asefaw">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-bold text-primary">Curriculum Vitae</h1>
                    </div>

                    <div className="prose lg:prose-xl text-gray-800 bg-white p-8 md:p-12 rounded-2xl shadow-sm cv-content">
                        <MDXRemote {...mdxSource} />
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const cvPath = path.join(process.cwd(), 'content', 'cv.md');
    const fileContents = fs.readFileSync(cvPath, 'utf8');
    const { content } = matter(fileContents);
    const mdxSource = await serialize(content);

    return {
        props: {
            mdxSource,
        },
    };
};
