import type { Metadata } from 'next'
import AboutPage from '../components/about/aboutPage';

export const metadata: Metadata = {
    title: 'Giới thiệu',
    description: 'Giới thiệu',
}

export default function About() {
    return (
        <div className=" text-green-900">
            <AboutPage />
        </div>
    );
}