import { useEffect } from "react";
import styles from "./Stars.module.scss";

export default function Stars({ containerRef, layers = 4 }) {
    useEffect(() => {
        if (containerRef.current) {
            // Draw 'em stars!
            const getStarmapCanvas = index => {
                let el = containerRef.current.querySelector(
                    `canvas.starmap-${index}`
                );
                if (!el) {
                    el = document.createElement("canvas");
                    el.classList.add(`starmap-${index}`);
                    el.classList.add("starmap");
                    el.classList.add("parallax");
                    el.classList.add("fade-in");
                    containerRef.current.appendChild(el);
                    el.setAttribute("value", 2 / Math.log(index + 1));
                }
                return el;
            };

            const createStarmap = index => {
                const el = getStarmapCanvas(index);
                const ctx = el.getContext("2d");
                ctx.canvas.width = containerRef.current.clientWidth;
                ctx.canvas.height = containerRef.current.clientHeight;
                const starCount = (index + 1) * 10;
                for (let i = 0; i < starCount; i++) {
                    let x = Math.random() * ctx.canvas.width;
                    let y = Math.random() * ctx.canvas.height;
                    let size = 2 / Math.log(index + 1);
                    ctx.shadowColor = "#FFF2CC";
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    ctx.shadowBlur = 10;
                    ctx.fillStyle = "white";
                    ctx.beginPath();
                    ctx.ellipse(x, y, size, size, Math.PI / 4, 0, 2 * Math.PI);
                    ctx.fill();
                }
            };

            for (let i = 0; i <= layers; i++) {
                createStarmap(i);
            }
        }
    }, [containerRef]);

    return <div className={styles.container} />;
}
