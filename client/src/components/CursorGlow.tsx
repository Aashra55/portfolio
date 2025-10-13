"use client";
import { useEffect } from "react";

const RainbowCursor = () => {
  useEffect(() => {
    const colors = [
      "#ff005e",
      "#ff7b00",
      "#ffe600",
      "#00ff85",
      "#00cfff",
      "#bd00ff",
    ];

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement("span");
      particle.classList.add("cursor-particle");
      document.body.appendChild(particle);

      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = color;
      particle.style.left = x + "px";
      particle.style.top = y + "px";

      // Random size
      const size = Math.random() * 8 + 4;
      particle.style.width = size + "px";
      particle.style.height = size + "px";

      // Random rotation
      particle.style.transform = `translate(-50%, -50%) rotate(${
        Math.random() * 360
      }deg)`;

      // Fade out
      setTimeout(() => {
        particle.style.opacity = "0";
        particle.style.transform += " scale(0)";
      }, 50);

      // Remove from DOM
      setTimeout(() => {
        particle.remove();
      }, 800);
    };

    const handleMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        createParticle(e.clientX + offsetX, e.clientY + offsetY);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
};

export default RainbowCursor;
