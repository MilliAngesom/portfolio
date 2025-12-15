import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <Layout>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Million Angesom Asefaw',
                            url: 'https://million-angesom.vercel.app',
                            jobTitle: 'PhD Student',
                            affiliation: {
                                '@type': 'Organization',
                                name: 'Université du Québec à Trois-Rivières (UQTR)',
                            },
                            sameAs: [
                                'https://www.linkedin.com/in/million-angesom-101b571a1',
                                'https://github.com/MilliAngesom',
                            ],
                        }),
                    }}
                />
            </Head>

            <section className="bg-primary text-white py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
                    <div className="lg:w-1/2 mt-10 lg:mt-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl lg:text-6xl font-bold font-sans tracking-tight mb-6"
                        >
                            Hi, I'm <span className="text-accent">Million Angesom Asefaw</span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl lg:text-3xl text-gray-300 font-light mb-6"
                        >
                            PhD @ UQTR (started Sep 2025)
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg text-gray-400 mb-8 max-w-lg"
                        >
                            I am a robotics researcher currently pursuing a PhD at Université du Québec à Trois-Rivières (UQTR) in the Autonomous Vehicles / Robotics area. My research interests include visual SLAM, acoustic/echo-based mapping, sensor fusion, motion planning, and control for autonomous systems.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex space-x-4"
                        >
                            <Link href="/projects" className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors">
                                View Projects
                            </Link>
                            <Link href="/contact" className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
                                Contact Me
                            </Link>
                        </motion.div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent shadow-2xl"
                        >
                            <img
                                src="/headshot.jpg"
                                alt="Million Angesom Asefaw"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
