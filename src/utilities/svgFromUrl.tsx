'use client'

import { useEffect, useState } from 'react'

type SvgFromUrlProps = {
    url: string
    alt?: string
    className?: string
}

export function SvgFromUrl({ url, alt = '', className = '' }: SvgFromUrlProps) {
    const [svg, setSvg] = useState<string | null>(null)

    useEffect(() => {
        const fetchAndCleanSvg = async () => {
            try {
                const res = await fetch(url)
                const raw = await res.text()

                const cleaned = raw.replace(/<svg[^>]*>/, (match) =>
                    match
                        .replace(/\s(width|height)="[^"]*"/g, '') // remove width/height
                        .replace(/<svg/, `<svg class="${className}"`) // inject class
                )

                setSvg(cleaned)
            } catch (err) {
                console.error(`Error loading SVG at ${url}`, err)
                setSvg(null)
            }
        }

        fetchAndCleanSvg()
    }, [url, className]) // ← this is now always a stable array of two items

    if (!svg) return null

    return (
        <div
            role="img"
            aria-label={alt}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    )
}