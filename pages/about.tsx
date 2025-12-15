import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';

export default function About() {
    return (
        <Layout title="About - Million Angesom Asefaw">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-primary mb-8">About Me</h1>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-accent mb-4">Biography</h2>
                        <div className="prose lg:prose-xl text-gray-700">
                            <p className="mb-4">
                                I am a robotics researcher currently pursuing a PhD (started <strong>September 2025</strong>) at <strong>Université du Québec à Trois-Rivières (UQTR)</strong> in the Autonomous Vehicles / Robotics area. Previously I was a PhD student at <strong>KU Leuven — Ghent Campus</strong> (DRAMCO research group).
                            </p>
                            <p className="mb-4">
                                I hold an Erasmus Mundus Joint MSc in Intelligent Field Robotic Systems (IFRoS, 2022–2024) which was held at the University of Girona and University of Zagreb, and a BSc in Electrical and Electronics Engineering (2017) from Eritrea Institute of Technology.
                            </p>
                            <p>
                                My research interests include <strong>visual SLAM, acoustic/echo-based mapping, sensor fusion, motion planning, and control for autonomous systems</strong>.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-accent mb-8">Timeline</h2>
                        <Timeline />
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <section>
                            <h2 className="text-2xl font-semibold text-accent mb-4">Skills</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">Core Technical</h3>
                                    <p className="text-gray-600 dark:text-gray-400">SLAM (visual & sonar), Visual-Inertial SLAM, Pose Graph Optimization (GTSAM), LIDAR/ICP/GICP, Point Cloud Library (PCL), ROS, OpenCV, Eigen.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">Programming</h3>
                                    <p className="text-gray-600 dark:text-gray-400">C, C++, Python, MATLAB/Simulink, PyTorch.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">Robotics Tools</h3>
                                    <p className="text-gray-600 dark:text-gray-400">IsaacSim, Gazebo, OMPL, PyTrees, Stonefish, DVL/IMU integration.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">Other</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Control systems, motion planning (OMPL, RRT*), reinforcement learning experiments (Q-learning).</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-accent mb-4">Languages & Soft Skills</h2>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
                                <li><strong>Languages:</strong> Tigrigna (native), English (proficient).</li>
                                <li><strong>Soft Skills:</strong> Organization, communication, leadership, analytical thinking, teamwork.</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
