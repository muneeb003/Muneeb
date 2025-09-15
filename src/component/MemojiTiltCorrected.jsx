import React, { useEffect, useRef } from "react";
import bitmoji from "./emoji.png";

export default function MemojiTiltDynamic({
  size = 220,
  maxTilt = 30,
  easing = 0.1,
  tiltFactorX = 1,
  tiltFactorY = 1,
}) {
  const imgRef = useRef(null);
  const rafRef = useRef(null);

  const current = useRef({ rotateX: 0, rotateY: 0 });
  const target = useRef({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const img = imgRef.current;
    const section = img.closest(".topSection");
    if (!section) return;

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    const onPointerMove = (e) => {
      const rect = section.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      const nx = clamp(dx / (rect.width / 2), -1, 1);
      const ny = clamp(dy / (rect.height / 2), -1, 1);

      // Non-linear diagonal boost
      const distance = Math.hypot(nx, ny); // distance from center
      const boost = Math.pow(distance, 1.5); // stronger in corners, weaker near center

      const rotateY = nx * maxTilt * tiltFactorY * boost;
      const rotateX = -ny * maxTilt * tiltFactorX * boost;

      target.current = { rotateX, rotateY };
    };

    const onPointerLeave = () => {
      target.current = { rotateX: 0, rotateY: 0 };
    };

    const tick = () => {
      current.current.rotateX +=
        (target.current.rotateX - current.current.rotateX) * easing;
      current.current.rotateY +=
        (target.current.rotateY - current.current.rotateY) * easing;

      img.style.transform = `perspective(1000px) rotateX(${current.current.rotateX.toFixed(
        2
      )}deg) rotateY(${current.current.rotateY.toFixed(2)}deg)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    section.addEventListener("mousemove", onPointerMove);
    section.addEventListener("mouseleave", onPointerLeave);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      section.removeEventListener("mousemove", onPointerMove);
      section.removeEventListener("mouseleave", onPointerLeave);
    };
  }, [maxTilt, easing, tiltFactorX, tiltFactorY]);

  return (
    <img
      ref={imgRef}
      src={bitmoji}
      alt="bitmoji"
      style={{
        width: `${size}px`,
        height: "auto",
        transformOrigin: "center",
        willChange: "transform",
        userSelect: "none",
        pointerEvents: "none",
      }}
    />
  );
}
