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

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {meteorStyles.map((style, idx) => (
                <span
                    key={`${id}-${idx}`}
                    className="absolute w-0.5 h-0.5 rotate-[215deg] animate-meteor rounded-full bg-indigo-500 shadow-[0_0_0_1px_#ffffff10]"
                    style={style}
                >
                    <span className="absolute top-1/2 -translate-y-1/2 w-[50px] h-[1px] bg-gradient-to-r from-indigo-500 to-transparent" />
                </span>
            ))}
        </div>
    )
}
