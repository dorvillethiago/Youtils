"use client"

import { useState, useEffect } from "react";
import styles from "./MouseFollower.module.scss";

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setTimeout(() => {
                setPosition({ x: event.clientX, y: event.clientY });
            }, 80);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transition: "transform 0.2s ease-out",
                transform: "translate(-50%, -50%)",
            }}
        >
            <div className={styles.follower}/>
        </div>
    );
};

export default MouseFollower;
