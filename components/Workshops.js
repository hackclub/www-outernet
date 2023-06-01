// Workshops with the balls!
import styles from "./Workshops.module.scss";
import { Fragment, useEffect, useRef } from "react";
import Matter from "matter-js";
import { Fade, Zoom } from "react-reveal";

export default function Workshops() {
    const balls = [
        {
            heading: "The Cookhouse",
            text: "Did someone say dinner?."
        },
        {
            heading: "The Lab",
            text: "Come and learn something new!"
        },
        {
            heading: "The Hardware Shack",
            text: "Find makerware to hack on"
        },
        {
            heading: "The cafe",
            text: "We're serving matcha, coffee, and tea!"
        },
        {
            heading: "Immigration",
            text: "The gateway to Outernet!"
        },
        {
            heading: "Outernet LAN",
            text: "We're building a mesh intranet"
        }
    ];
    const ballsRef = useRef([]);
    const containerRef = useRef();
    const requestRef = useRef();
    const engineRef = useRef();

    useEffect(() => {
        engineRef.current = Matter.Engine.create();
        const engine = engineRef.current;

        let boxes = [];
        let x = 110,
            y = 110;
        for (let ball of ballsRef.current) {
            boxes.push({
                body: Matter.Bodies.circle(x, y, 230 / 2),
                elem: ball,
                render() {
                    const { x, y } = this.body.position;
                    this.elem.style.top = `${y - 230 / 2}px`;
                    this.elem.style.left = `${x - 230 / 2}px`;
                    this.elem.style.transform = `rotate(${this.body.angle}rad)`;
                }
            });
            x += 230;
            if (x >= containerRef.current.clientWidth) {
                x = 230;
                y += 230;
            }
        }

        const { top, right, bottom, left } =
            containerRef.current.getBoundingClientRect();

        Matter.Composite.add(engine.world, [
            ...boxes.map(box => box.body),
            Matter.Bodies.rectangle(
                0,
                containerRef.current.clientHeight - 1,
                containerRef.current.clientWidth * 2,
                1,
                { isStatic: true }
            ),
            Matter.Bodies.rectangle(
                0,
                0,
                1,
                containerRef.current.clientHeight * 2,
                { isStatic: true }
            ),
            Matter.Bodies.rectangle(
                containerRef.current.clientWidth - 1,
                0,
                1,
                containerRef.current.clientHeight * 2,
                { isStatic: true }
            ),
            Matter.Bodies.rectangle(
                0,
                0,
                containerRef.current.clientWidth * 2,
                1,
                { isStatic: true }
            ),
            // Matter.MouseConstraint.create(engine, {
            //     element: containerRef.current,
            //     constraint: {
            //         render: {
            //           visible: true
            //         },
            //         stiffness: 0.8
            //       }
            // }),
        ]);
 
        (function rerender() {
            // Rerender every box
            for (let box of boxes) box.render();
            Matter.Engine.update(engine);
            requestRef.current = requestAnimationFrame(rerender);
        })();

        return () => {
            cancelAnimationFrame(requestRef.current);
            Matter.Engine.clear(engineRef.current);
        };
    }, []);


    useEffect(()=> {
        if (typeof window != undefined) {
            let ball = document.getElementById('ball')
            ball.removeEventListener("mousewheel", function() {return false})
            ball.removeEventListener("DOMMouseScroll", function() {return false})
        }
    }, [])

    return (
        <div className={styles.wrapper}>
            <Zoom>
            <div
                style={{
                    position: "relative",
                    zIndex: 3,
                    paddingBottom: "4rem",
                    maxWidth: "80vw"
                }}>
                <h1>it takes a village...</h1>
                <p>We’ve found the place.</p>
                <p>Now it’s time for you to create the space.</p>
                <p>
                    Outernet will be contrived of hacker-formed guilds, taking
                    shape through the vision of the hackers involved.
                </p>
                <p>
                    We’ve set aside $5,000 for guilds to use as you
                    see fit.
                </p>
                <p><b>What guild will you run?</b></p>
                <p>
                    Propose an idea, form your guild and build something
                    for the Outernet community to enjoy at{" "}
                    <a
                        className={styles.link}
                        href="https://github.com/hackclub/outernet"
                        target="_blank">
                        github.com/hackclub/outernet.
                    </a>
                </p>
            </div>
            </Zoom>
            <div
                style={{
                    maxHeight: "100%",
                    position: "relative",
                    cursor: "default !important",
                    minHeight: "400px",
                }}
                className={styles.ball}
                id="ball"
                ref={containerRef}>
                {balls.map((ball, idx) => (
                    <Fade delay={1000 / (idx + 1)}>
                    <div
                        className="ball"
                        ref={el => (ballsRef.current[idx] = el)}>
                        <div className="noSelect">
                            <h1>{ball.heading}</h1>
                            <p>{ball.text}</p>
                        </div>
                    </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
}
