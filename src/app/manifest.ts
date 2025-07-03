import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "L'ambada | Plage, Location & Restaurant en Corse",
    short_name: "L'ambada",
    description: "L'Ambada : appartements en location face à la plage en Corse, avec restaurant sur le sable pour des vacances relaxantes.",
    start_url: '/',
    display: 'standalone',
    background_color: '#0d9488', // primary color (teal-600)
    theme_color: '#0891b2', // secondary color (cyan-600)
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
