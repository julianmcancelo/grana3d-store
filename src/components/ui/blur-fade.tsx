"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { useMemo } from "react"

interface BlurFadeProps {
    children: React.ReactNode
    className?: string
    variant?: {
        hidden: { y: number }
        visible: { y: number }
    }
    duration?: number
    delay?: number
    yOffset?: number
    inView?: boolean
    inViewMargin?: string
    blur?: string
}

const BlurFade = ({
    children,
    className,
    variant,
    duration = 0.4,
    delay = 0,
    yOffset = 6,
    blur = "6px",
}: BlurFadeProps) => {
    const defaultVariants: Variants = useMemo(
        () => ({
            hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
            visible: { y: 0, opacity: 1, filter: "blur(0px)" },
        }),
        [yOffset, blur]
    )
    const combinedVariants = variant || defaultVariants

    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={combinedVariants}
                transition={{
                    delay: 0.04 + delay,
                    duration,
                    ease: "easeOut",
                }}
                className={cn(className)}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export { BlurFade }
