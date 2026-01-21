"use client"

import { cn } from "@/lib/utils"
import { useEffect, useId, useRef, useState } from "react"

interface AnimatedGridPatternProps {
    width?: number
    height?: number
    x?: number
    y?: number
    strokeDasharray?: string | number
    numSquares?: number
    maxOpacity?: number
    duration?: number
    className?: string
}

export function AnimatedGridPattern({
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = 0,
    numSquares = 50,
    maxOpacity = 0.5,
    duration = 4,
    className,
    ...props
}: AnimatedGridPatternProps) {
    const id = useId()
    const containerRef = useRef<SVGSVGElement>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>(() =>
        generateSquares(numSquares)
    )

    function generateSquares(count: number) {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            pos: [
                Math.floor(Math.random() * (dimensions.width / width)),
                Math.floor(Math.random() * (dimensions.height / height)),
            ] as [number, number],
        }))
    }

    useEffect(() => {
        if (containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect()
            setDimensions({ width, height })
        }
    }, [])

    useEffect(() => {
        if (dimensions.width && dimensions.height) {
            setSquares(generateSquares(numSquares))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dimensions, numSquares])

    return (
        <svg
            ref={containerRef}
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 dark:fill-gray-600/30 dark:stroke-gray-600/30",
                className
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
            <svg x={x} y={y} className="overflow-visible">
                {squares.map(({ id, pos }, index) => (
                    <rect
                        key={`${id}-${index}`}
                        width={width - 1}
                        height={height - 1}
                        x={pos[0] * width + 1}
                        y={pos[1] * height + 1}
                        fill="currentColor"
                        strokeWidth="0"
                        className="animate-grid-fade"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            animationDuration: `${duration}s`,
                            opacity: 0,
                        }}
                    />
                ))}
            </svg>
        </svg>
    )
}
