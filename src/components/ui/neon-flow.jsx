import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

// Helper for random colors
const randomColors = (count) => {
    return new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
};

/**
 * TubesBackground - An interactive 3D neon tubes background effect
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display over the background
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.enableClickInteraction - Whether clicking randomizes colors (default: true)
 */
export function TubesBackground({
    children,
    className,
    enableClickInteraction = true
}) {
    const canvasRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const tubesRef = useRef(null);

    useEffect(() => {
        let mounted = true;
        let cleanup;

        const initTubes = async () => {
            if (!canvasRef.current) return;

            try {
                // Using the specific CDN build for the neon tubes effect
                // @ts-ignore - Dynamic import from CDN
                const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
                const TubesCursor = module.default;

                if (!mounted) return;

                const app = TubesCursor(canvasRef.current, {
                    tubes: {
                        colors: ["#d97706", "#f59e0b", "#14b8a6"],
                        lights: {
                            intensity: 150,
                            colors: ["#fbbf24", "#f97316", "#d97706", "#14b8a6"]
                        }
                    }
                });

                tubesRef.current = app;
                setIsLoaded(true);

                // Handle resize if needed
                const handleResize = () => {
                    // The library typically handles resize internally
                };

                window.addEventListener('resize', handleResize);

                cleanup = () => {
                    window.removeEventListener('resize', handleResize);
                };

            } catch (error) {
                console.error("Failed to load TubesCursor:", error);
            }
        };

        initTubes();

        return () => {
            mounted = false;
            if (cleanup) cleanup();
        };
    }, []);

    const handleClick = () => {
        if (!enableClickInteraction || !tubesRef.current) return;

        const colors = randomColors(3);
        const lightsColors = randomColors(4);

        tubesRef.current.tubes.setColors(colors);
        tubesRef.current.tubes.setLightsColors(lightsColors);
    };

    return (
        <div
            className={cn("relative w-full h-full min-h-[400px] overflow-hidden bg-background", className)}
            onClick={handleClick}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full block"
                style={{ touchAction: 'none' }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full pointer-events-none">
                {children}
            </div>
        </div>
    );
}

// Default export
export default TubesBackground;
