import Link from 'next/link';
import { Button } from '@/components/ui/button';
import farinoleBeachCropped from 'public/farinoleBeachCropped.webp';

export default function NotFound() {
    return (
        <div className="relative min-h-screen">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${farinoleBeachCropped.src})`,
                    backgroundPosition: 'center center',
                }}>
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* 404 Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
                <div className="mx-auto max-w-2xl">
                    <h1 className="mb-4 text-8xl font-bold text-white opacity-90 md:text-9xl">
                        404
                    </h1>
                    <h2 className="mb-6 text-3xl font-light text-white md:text-4xl">
                        Page introuvable
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
                        Désolé, la page que vous recherchez n&#39;existe pas ou a été déplacée.
                        Retournez à l&#39;accueil pour découvrir notre magnifique résidence.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button
                            className="rounded-full bg-teal-600 px-8 py-3 text-lg font-medium text-white hover:bg-teal-700"
                            asChild>
                            <Link href="/" replace scroll={false} shallow={false}>
                                Retour à l&#39;accueil
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-lg font-medium text-white hover:bg-white hover:text-gray-900"
                            asChild>
                            <Link href="/fr/residence" replace scroll={false} shallow={false}>
                                Découvrir la résidence
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute right-0 bottom-0 left-0 z-5 h-32 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
    );
}
