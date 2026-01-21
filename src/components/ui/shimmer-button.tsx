"use client"

import React, { CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface ShimmerButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shimmerColor?: string
    shimmerSize?: string
    borderRadius?: string
    shimmerDuration?: string
    background?: string
    className?: string
    children?: React.ReactNode
}

export function ShimmerButton({
    shimmerColor = "#ffffff",
    shimmerSize = "0.1em",
    shimmerDuration = "2s",
    borderRadius = "100px",
    background = "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    className,
    children,
    ...props
}: ShimmerButtonProps) {
    return (
        <button
            style={
                {
                    "--shimmer-color": shimmerColor,
                    "--shimmer-size": shimmerSize,
                    "--shimmer-duration": shimmerDuration,
                    "--border-radius": borderRadius,
                    "--background": background,
                } as CSSProperties
            }
            className={cn(
                "group relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-3",
                "text-white font-semibold tracking-wide",
                "[background:var(--background)]",
                "rounded-[var(--border-radius)]",
                "transition-all duration-300",
                "hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25",
                "active:scale-100",
                className
            )}
            {...props}
        >
            <div
                className="absolute inset-0 overflow-hidden rounded-[var(--border-radius)]"
            >
                <div
                    className="absolute inset-[-100%] animate-shimmer"
                    style={{
                        background: `linear-gradient(90deg, transparent, var(--shimmer-color), transparent)`,
                        animationDuration: "var(--shimmer-duration)",
                    }}
                />
            </div>
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}
