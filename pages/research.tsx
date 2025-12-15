import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function Research() {
    return (
        <Layout title="Research - Million Angesom Asefaw">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-primary mb-8">Research</h1>

                    <div className="prose lg:prose-xl text-gray-700 bg-white p-8 rounded-2xl shadow-sm">
                        <p>
                            My primary research focus is on <strong>Autonomous Systems</strong>, specifically in the domain of localization and mapping for mobile robots.
                        </p>

                        <h3 className="text-accent mt-8 mb-4">Core Research Interests</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Visual SLAM:</strong> Leveraging camera data for simultaneous localization and mapping in complex environments.</li>
                            <li><strong>Acoustic/Echo-based Mapping:</strong> Utilizing sonar and acoustic signals for mapping, particularly in underwater or low-visibility scenarios (AUV applications).</li>
                            <li><strong>Sensor Fusion:</strong> Integrating data from multiple sources (LIDAR, Camera, IMU, DVL) to improve state estimation accuracy and robustness.</li>
                            <li><strong>Motion Planning & Control:</strong> Developing algorithms for efficient path planning (RRT*, OMPL) and robust control execution for mobile platforms and manipulators.</li>
                        </ul>

                        <h3 className="text-accent mt-8 mb-4">Current Work</h3>
                        <p>
                            As a PhD student at <strong>UQTR</strong>, I am investigating advanced techniques for autonomous vehicle navigation, aiming to enhance the autonomy of robots in unstructured and dynamic environments.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
