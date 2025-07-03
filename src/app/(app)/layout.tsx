import React from 'react';

import '@/styles/globals.css'; // global styles first
import 'leaflet/dist/leaflet.css';

export const metadata = {
    description:
        'L’Ambada : appartements en location face à la plage en Corse, avec restaurant sur le sable pour des vacances relaxantes.',
    title: "Accueil | L'ambada | Plage, Location & Restaurant en Corse",
    icons: {
        icon: '/favicon.ico', // or any supported format: .png, .svg, etc.
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
