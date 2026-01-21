"use client"

import { cn } from "@/lib/utils"
import { useEffect, useId, useState } from "react"

interface MeteorsProps {
    number?: number
    className?: string
}

export function Meteors({ number = 20, className }: MeteorsProps) {
    const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([])
    const id = useId()

    useEffect(() => {
        const styles = [...Array(number)].map(() => ({
            top: -5,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: `${Math.random() * 8 + 2}s`,
        }))
        setMeteorStyles(styles)
    }, [number])

    // Grana 3D brand colors for meteors
    const colors = ['#8B2F8B', '#00B4B4', '#F5A623']

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {meteorStyles.map((style, idx) => {
                const color = colors[idx % colors.length]
                return (
                    <span
                        key={`${id}-${idx}`}
                        className="absolute w-0.5 h-0.5 rotate-[215deg] animate-meteor rounded-full"
                        style={{
                            ...style,
                            backgroundColor: color,
                            boxShadow: `0 0 0 1px ${color}20`,
                        }}
                    >
                        <span
                            className="absolute top-1/2 -translate-y-1/2 w-[50px] h-[1px]"
                            style={{
                                background: `linear-gradient(to right, ${color}, transparent)`,
                            }}
                        />
                    </span>
                )
            })}
        </div>
    )
}
