import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: 'About', href: '/about' },
        { name: 'Research', href: '/research' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-primary text-white shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-4 flex items-center justify-between border-b border-primary lg:border-none">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold font-sans tracking-tight hover:text-accent transition-colors">
                            Million A. Asefaw
                        </Link>
                    </div>
                    <div className="hidden ml-10 space-x-8 lg:block">
                        {navigation.map((link) => (
                            <Link key={link.name} href={link.href} className="text-base font-medium text-white hover:text-accent transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex items-center space-x-4">
                        <a href="https://github.com/MilliAngesom" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/million-angesom-101b571a1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                    <div className="-mr-2 flex items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-primary p-2 rounded-md inline-flex items-center justify-center text-gray-200 hover:text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="lg:hidden pb-4 space-y-1">
                        {navigation.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-accent hover:bg-opacity-75"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex space-x-4 px-3 py-2 border-t border-gray-700 mt-2">
                            <a href="https://github.com/MilliAngesom" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/million-angesom-101b571a1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
