import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    summary: string;
    tags: string[];
    slug: string;
}

const ProjectCard = ({ title, summary, tags, slug }: ProjectCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
        >
            <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{summary}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-teal-50 text-accent text-sm rounded-full font-medium">
                        {tag}
                    </span>
                ))}
            </div>
            <Link href={`/projects/${slug}`} className="inline-flex items-center text-accent font-semibold hover:underline mt-auto">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
