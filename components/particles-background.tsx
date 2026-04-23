"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#8e24aa"],
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
            // This creates the vortex/swirl effect around the center
            spin: {
              enable: true,
              position: { x: 50, y: 50 },
            },
          },
          number: {
            density: {
              enable: true,
              width: 800,
              height: 800,
            },
            value: 200, // Reduced slightly so the vortex is clean
          },
          opacity: {
            value: 0.8,
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          // Make particles align their rotation to their movement direction
          rotate: {
            path: true,
            enable: true,
            animation: {
              enable: false,
            },
          },
          shape: {
            type: "character",
            options: {
              character: {
                value: "-", // Em dash to look like the lines in the image
                font: "Arial",
                weight: "bold",
              },
            },
          },
          size: {
            value: { min: 8, max: 16 }, // Size controls the font size of the character
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
