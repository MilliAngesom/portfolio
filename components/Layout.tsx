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
