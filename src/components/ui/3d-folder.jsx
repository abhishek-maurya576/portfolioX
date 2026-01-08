"use client"

import { useState, forwardRef } from "react"
import { cn } from "@/lib/utils"

// ============================================
// AnimatedFolder Component - Production Ready
// ============================================
// Design decisions:
// 1. Removed floating lightbox - caused misalignment and overlap issues
// 2. Hover reveals skill icons in a clean fanned layout
// 3. No click interaction needed - hover-only for simplicity
// 4. Neumorphic styling for modern portfolio aesthetic
// 5. All skills visible on hover without popups or modals

export function AnimatedFolder({ title, projects, className, icon }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="flex flex-col items-center">
            {/* Title pill - always visible above folder */}
            <div
                className="mb-3 flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300"
                style={{
                    background: "linear-gradient(135deg, rgba(30,30,30,0.95) 0%, rgba(20,20,20,0.98) 100%)",
                    boxShadow: isHovered
                        ? "0 4px 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
                        : "0 2px 10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                    border: isHovered ? "1px solid rgba(59, 130, 246, 0.5)" : "1px solid rgba(60,60,60,0.5)",
                    transform: isHovered ? "scale(1.02)" : "scale(1)",
                }}
            >
                {icon && <span className="text-frost-accent">{icon}</span>}
                <h3 className="text-sm font-semibold text-frost-text tracking-tight">
                    {title}
                </h3>
                <span className="text-xs text-frost-text-secondary font-medium px-1.5 py-0.5 bg-frost-accent/10 rounded-full">
                    {projects.length}
                </span>
            </div>

            {/* Folder Card Container */}
            <div
                className={cn(
                    "relative flex flex-col items-center justify-center",
                    "p-5 rounded-2xl cursor-pointer",
                    "transition-all duration-500 ease-out",
                    "group",
                    className,
                )}
                style={{
                    minWidth: "220px",
                    minHeight: "200px",
                    perspective: "1000px",
                    background: "linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)",
                    boxShadow: isHovered
                        ? "10px 10px 30px rgba(0,0,0,0.5), -8px -8px 24px rgba(40,40,40,0.3)"
                        : "6px 6px 18px rgba(0,0,0,0.4), -4px -4px 14px rgba(40,40,40,0.2)",
                    border: isHovered ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid rgba(60,60,60,0.3)",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Accent glow on hover */}
                <div
                    className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse at 50% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
                        opacity: isHovered ? 1 : 0,
                    }}
                />

                {/* Folder and Skills Container */}
                <div className="relative flex items-center justify-center" style={{ height: "120px", width: "180px" }}>

                    {/* Folder Back */}
                    <div
                        className="absolute w-24 h-16 rounded-lg"
                        style={{
                            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                            boxShadow: "0 4px 12px rgba(245, 158, 11, 0.25)",
                            transformOrigin: "bottom center",
                            transform: isHovered ? "rotateX(-12deg) translateY(-2px)" : "rotateX(0deg)",
                            transition: "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                            zIndex: 10,
                        }}
                    />

                    {/* Folder Tab */}
                    <div
                        className="absolute w-8 h-2.5 rounded-t-md"
                        style={{
                            background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
                            top: "calc(50% - 32px - 8px)",
                            left: "calc(50% - 48px + 12px)",
                            transformOrigin: "bottom center",
                            transform: isHovered ? "rotateX(-18deg) translateY(-1px)" : "rotateX(0deg)",
                            transition: "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                            zIndex: 10,
                        }}
                    />

                    {/* Skill Icons - Fan out on hover */}
                    <div
                        className="absolute"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 20,
                        }}
                    >
                        {projects.slice(0, 5).map((project, index) => (
                            <SkillIcon
                                key={project.id}
                                image={project.image}
                                title={project.title}
                                index={index}
                                total={Math.min(projects.length, 5)}
                                isVisible={isHovered}
                            />
                        ))}
                    </div>

                    {/* Folder Front */}
                    <div
                        className="absolute w-24 h-16 rounded-lg"
                        style={{
                            background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                            boxShadow: "0 6px 20px rgba(251, 191, 36, 0.35)",
                            top: "calc(50% - 32px + 3px)",
                            transformOrigin: "bottom center",
                            transform: isHovered ? "rotateX(20deg) translateY(6px)" : "rotateX(0deg)",
                            transition: "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                            zIndex: 30,
                        }}
                    />

                    {/* Folder Shine */}
                    <div
                        className="absolute w-24 h-16 rounded-lg pointer-events-none"
                        style={{
                            top: "calc(50% - 32px + 3px)",
                            background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 50%)",
                            transformOrigin: "bottom center",
                            transform: isHovered ? "rotateX(20deg) translateY(6px)" : "rotateX(0deg)",
                            transition: "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                            zIndex: 31,
                        }}
                    />
                </div>

                {/* Skill count badge */}
                <p className="text-xs text-frost-text-secondary mt-2 font-medium transition-opacity duration-300"
                    style={{ opacity: isHovered ? 0.4 : 0.7 }}>
                    {projects.length} skills
                </p>

                {/* Hover hint - fades on hover */}
                <div
                    className="text-[10px] text-frost-text-secondary/50 transition-all duration-300 mt-1"
                    style={{
                        opacity: isHovered ? 0 : 1,
                        transform: isHovered ? "translateY(4px)" : "translateY(0)",
                    }}
                >
                    Hover to preview
                </div>
            </div>
        </div>
    )
}


// ============================================
// SkillIcon Component - Individual skill badge
// ============================================
// Hover behavior:
// - Card smoothly comes to front (z-index: 50)
// - Slight scale up (1.15x) and elevation (-8px)
// - Uses transform + transition for performance
// - No layout reflow - position stays stable

const SkillIcon = forwardRef(
    ({ image, title, index, total, isVisible }, ref) => {
        const [isHovered, setIsHovered] = useState(false)

        // Calculate fan-out positions based on total skills
        const getPosition = () => {
            if (total <= 1) return { x: 0, rotation: 0 }

            const spread = Math.min(total - 1, 4) // Max 5 cards
            const step = 35 // pixels between cards
            const rotationStep = 8 // degrees between cards

            const centerIndex = (spread) / 2
            const offset = index - centerIndex

            return {
                x: offset * step,
                rotation: offset * rotationStep,
            }
        }

        const { x, rotation } = getPosition()

        // Base z-index based on position (center cards slightly higher)
        const baseZIndex = 15 - Math.abs(index - 2)
        // On hover, bring to absolute front
        const zIndex = isHovered ? 50 : baseZIndex

        // Transform calculations
        const baseTransform = isVisible
            ? `translateY(-70px) translateX(${x}px) rotate(${rotation}deg)`
            : "translateY(0px) translateX(0px) rotate(0deg)"

        // Hover adds scale and slight elevation
        const hoverTransform = isHovered
            ? `${baseTransform} scale(1.15) translateY(-8px)`
            : `${baseTransform} scale(${isVisible ? 1 : 0.6})`

        return (
            <div
                ref={ref}
                className={cn(
                    "absolute rounded-lg overflow-hidden cursor-pointer",
                    "transition-all ease-out",
                    // Shadow enhances on hover for depth
                    isHovered
                        ? "shadow-2xl shadow-black/40"
                        : "shadow-lg shadow-black/30",
                )}
                style={{
                    width: "52px",
                    height: "68px",
                    transform: hoverTransform,
                    opacity: isVisible ? 1 : 0,
                    // Faster transition on hover, slower on fan-out
                    transitionDuration: isHovered ? "200ms" : "500ms",
                    transitionDelay: isHovered ? "0ms" : `${index * 50}ms`,
                    zIndex: zIndex,
                    left: "-26px",
                    top: "-34px",
                    background: isHovered
                        ? "linear-gradient(145deg, #334155 0%, #1e293b 100%)"
                        : "linear-gradient(145deg, #1e293b 0%, #0f172a 100%)",
                    border: isHovered
                        ? "1px solid rgba(59, 130, 246, 0.5)"
                        : "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Icon container */}
                <div className="w-full h-10 flex items-center justify-center pt-1">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-8 h-8 object-contain transition-transform duration-200"
                            style={{
                                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                            }}
                        />
                    ) : (
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-frost-accent/30 to-frost-accent/50 flex items-center justify-center text-white font-bold text-sm">
                            {title.charAt(0)}
                        </div>
                    )}
                </div>

                {/* Title background gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-7 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                {/* Skill name */}
                <p
                    className="absolute bottom-1 left-0.5 right-0.5 text-[9px] font-medium text-center truncate transition-colors duration-200"
                    style={{ color: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.9)" }}
                >
                    {title}
                </p>
            </div>
        )
    },
)

SkillIcon.displayName = "SkillIcon"

export { SkillIcon }
