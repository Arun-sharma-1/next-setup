// import React from 'react'
// import styles from './animation.module.css'
// const AnimationPages = () => {
//     return (
//         <div className="container">
//             <div className='box'>Box 1</div>

//             <button className='btn'>Hire me</button>
//         </div>
//     )
// }

// export default AnimationPages

// src/components/HorizontalScroll.tsx
'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(".panel");

    if (!container || !sections.length) return;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + container.offsetWidth,
      },
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="horizontal-container"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
          flexDirection: "row",
        marginLeft:'200px'
      }}
    >
      <section className="panel" style={panelStyle("lightcoral")}>Page 1</section>
      <section className="panel" style={panelStyle("lightblue")}>Page 2</section>
      <section className="panel" style={panelStyle("lightgreen")}>Page 3</section>
    </div>
  );
};

const panelStyle = (bg: string) => ({
  minWidth: "100vw",
  height: "100vh",
  backgroundColor: bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3rem",
  color: "white",
});

export default HorizontalScroll;
