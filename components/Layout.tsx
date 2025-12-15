import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

const Layout = ({ children, title = "Million Angesom Asefaw - Robotics Researcher", description = "Portfolio of Million Angesom Asefaw, Robotics PhD Student specializing in SLAM and Autonomous Systems." }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-warmGray font-sans">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Million Angesom Asefaw",
                            "jobTitle": "PhD Student (Robotics) @ Université du Québec à Trois-Rivières",
                            "url": "https://millionangesom.vercel.app/",
                            "sameAs": [
                                "https://github.com/MilliAngesom",
                                "https://www.linkedin.com/in/million-angesom-101b571a1"
                            ]
                        })
                    }}
                />
            </Head>
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
