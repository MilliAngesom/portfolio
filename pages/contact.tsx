import Layout from '@/components/Layout';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm p-2 border"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50"
                                    >
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                        <Send className="ml-2 h-4 w-4" />
                                    </button>
                                </div>
                                {status === 'success' && (
                                    <p className="text-green-600 text-sm mt-2">Message sent successfully! I'll get back to you soon.</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-600 text-sm mt-2">Something went wrong. Please try emailing me directly.</p>
                                )}
                            </form>
                        </section>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
