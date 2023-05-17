// Workshops with the balls!
import styles from "./Workshops.module.scss";
import { Fragment, useEffect, useRef } from "react";
import Matter from "matter-js";

export default function Workshops() {
    const containerRef = useRef();
    const requestRef = useRef();
    const engineRef = useRef();

    const addBox = (
        x = 0,
        y = 0,
        heading = "Workshops Shack",
        text = "workshops, etc."
    ) => {
        // Create element
        let wrapper = document.createElement("div");
        wrapper.classList.add("ball");
        wrapper.classList.add("noSelect");
        let container = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerHTML = heading;
        container.appendChild(h1);
        let p = document.createElement("p");
        p.innerHTML = text;
        container.appendChild(p);
        wrapper.appendChild(container);
        containerRef.current.appendChild(wrapper);

        const box = {
            body: Matter.Bodies.circle(x, y, 8.9),
            elem: wrapper,
            render() {
                const { x, y } = this.body.position;
                this.elem.style.top = `${y - 250 / 2}px`;
                this.elem.style.left = `${x - 250 / 2}px`;
                this.elem.style.transform = `rotate(${this.body.angle}rad)`;
            }
        };

        return box;
    };

    useEffect(() => {
        engineRef.current = Matter.Engine.create();
        const engine = engineRef.current;

        let boxes = [];
        let x = 0,
            y = 0;
        /*
        for (let i = 0; i < 5; i++) {
            let box = addBox();
            boxes.push(box);
            x += 8.9 * 2;
            y += 8.9 * 2;
        }
        */

        const ground = Matter.Bodies.rectangle(
            0, // x
            0, // y
            containerRef.clientWidth, // w
            10, // h
            { isStatic: true }
        );

        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            element: containerRef.current
        });

        Matter.Composite.add(engine.world, [ground, mouseConstraint]);

        (function rerender() {
            // Rerender every box
            // for (let box of boxes) box.render();
            Matter.Engine.update(engine);
            requestRef.current = requestAnimationFrame(rerender);
        })();

        return () => {
            cancelAnimationFrame(requestRef.current);
            Matter.Engine.clear(engineRef.current);
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <div>
                <h1>it takes a village...</h1>
                <p>We’ve found the place.</p>
                <p>Now it’s time for you to create the space.</p>
                <p>
                    Outernet will be contrived of hacker-formed villages, taking
                    shape through the vision of the hackers involved.
                </p>
                <p>
                    We’ve set aside $5,000 for villages to use as the community
                    sees fit.
                </p>
                <p>
                    Propose an idea, form your camp group and build something
                    for the Outernet community to enjoy at{" "}
                    <a
                        className={styles.link}
                        href="https://github.com/hackclub/outernet"
                        target="_blank">
                        github.com/hackclub/outernet.
                    </a>
                </p>
            </div>
            <div style={{ maxHeight: "100vh" }} ref={containerRef} />
        </div>
    );
}
