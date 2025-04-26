"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "nextjs",
  "typescript",
  "js",
  "react",
  "redux",
  "nodejs",
  "express",
  "tailwind",
  "bootstrap",
  "firebase",
  "wordpress",
  "php",
  "mysql",
  "mongodb",
  "docker",
  "prisma",
];

export default function AboutPage() {
  return (
    <main>
      {/* About */}
      <div className="px-5 md:px-20 py-10 bg-[#f9f6f3]">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="font-[Recoleta] text-5xl md:text-7xl mb-4">
            Where Code Meets Creativity My Story as a Full Stack Developer 🚀🎨
          </h2>
          <p className="text-xl">
            I&apos;m a Full Stack Developer who bridges logic and design to
            build powerful, user-focused web experiences. From clean code to
            creative interfaces, I love turning complex ideas into seamless
            digital solutions.
          </p>
        </motion.section>
      </div>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="px-5 md:px-20 py-10">
          <h2 className="font-[Recoleta] text-4xl font-bold mb-6">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <SkillIcon key={skill} name={skill} />
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function SkillIcon({ name }: { name: string }) {
  return (
    <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
      <Image
        src={`https://skillicons.dev/icons?i=${name}`}
        alt={name}
        width={60}
        height={60}
        unoptimized
        style={{ height: "auto" }}
      />
    </div>
  );
}
