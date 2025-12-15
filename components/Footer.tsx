import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Million Angesom Asefaw.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <Link href="/contact" className="hover:text-accent font-medium">Contact</Link>
                    <a href="https://github.com/MilliAngesom" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium">GitHub</a>
                    <a href="https://www.linkedin.com/in/million-angesom-101b571a1" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
