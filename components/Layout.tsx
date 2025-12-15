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
            <a href="#main-content" className="sr-only focus:not-sr-only bg-accent text-white px-4 py-2 absolute z-50">Skip to main content</a>
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
                <link rel="canonical" href={`https://millionangesom.vercel.app${typeof window !== 'undefined' ? window.location.pathname : ''}`} />
                <meta property="og:title" content={title || "Million Angesom Asefaw - Portfolio"} />
                <meta property="og:description" content={description || "PhD Student in Robotics"} />
                <meta property="og:image" content="https://millionangesom.vercel.app/og-default.png" />
                <meta name="twitter:card" content="summary_large_image" />
                {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
                    <script async defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/plausible.js"></script>
                )}
            </Head>
            <Header />
            <main id="main-content" className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
