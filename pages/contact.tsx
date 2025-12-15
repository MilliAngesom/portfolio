import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <Layout title="Contact - Million Angesom Asefaw">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-primary mb-12">Contact Me</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <section>
                            <h2 className="text-2xl font-semibold text-accent mb-6">Get in Touch</h2>
                            <p className="text-gray-700 mb-8">
                                I am always open to discussing new research collaborations, thesis opportunities, or just chatting about robotics. Feel free to reach out!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center text-gray-700">
                                    <Mail className="h-6 w-6 mr-3 text-accent" />
                                    <span>million.angesom1994@gmail.com</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <MapPin className="h-6 w-6 mr-3 text-accent" />
                                    <span>Université du Québec à Trois-Rivières (UQTR)</span>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white p-8 rounded-2xl shadow-sm">
                            <form action="https://formsubmit.co/million.angesom1994@gmail.com" method="POST" className="space-y-6">
                                {/* Honeypot */}
                                <input type="text" name="_honey" style={{ display: 'none' }} />
                                {/* Disable Captcha */}
                                <input type="hidden" name="_captcha" value="false" />
                                {/* Success Redirect */}
                                <input type="hidden" name="_next" value="https://millionangesom.vercel.app/contact?success=1" />

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm p-2 border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm p-2 border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm p-2 border"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                                    >
                                        Send Message
                                        <Send className="ml-2 h-4 w-4" />
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
