"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}       // Start hidden, slightly below
          whileInView={{ opacity: 1, y: 0 }}   // Animate into view
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-orange-600 text-sm font-mono mb-2">Who I Am</p>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I’m a passionate Full-Stack Developer who loves turning ideas into
            functional and beautiful digital experiences. I enjoy solving
            complex problems and creating applications that are intuitive,
            responsive, and enjoyable for users, always learning to improve with
            every project.
          </p>

          <div className="mt-3">
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
            >
              Read full story →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}