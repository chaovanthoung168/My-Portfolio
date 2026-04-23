"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesBackground from "./particles-background";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-4xl text-center z-10">
        {/* Animate when in viewport */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-orange-600 text-sm font-mono mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Full-Stack Developer
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Building scalable systems powered by clean design and solid
            architecture.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            {/* GitHub */}
            <a
              href="https://github.com/chaovanthoung168"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-orange-600 transition-colors duration-300 transform hover:scale-110"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.303 24 12c0-6.629-5.371-12-12-12z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-orange-600 transition-colors duration-300 transform hover:scale-110"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.983 3.5C3.343 3.5 2 4.857 2 6.5c0 1.637 1.343 2.992 2.983 2.992 1.639 0 2.983-1.355 2.983-2.992C7.966 4.857 6.622 3.5 4.983 3.5zM2.4 8.98h5.167V21H2.4V8.98zM9.983 8.98h4.952v1.593h.07c.69-1.31 2.376-2.694 4.893-2.694 5.234 0 6.2 3.447 6.2 7.92V21h-5.167v-6.882c0-1.641-.031-3.75-2.28-3.75-2.28 0-2.628 1.78-2.628 3.622V21H9.983V8.98z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-13 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-muted-foreground mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
