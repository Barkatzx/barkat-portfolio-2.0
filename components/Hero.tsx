"use client";

import heroImage from "@/public/img/barkat-hero.png";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section className="relative bg-[#f9f6f3] py-12 md:py-24 overflow-hidden">
      {/* Background Image Pattern */}
      <div
        className="absolute inset-0 bg-[url('../public/img/wave.png')] bg-cover"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 md:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={heroImage}
                alt="Hero Illustration"
                width={500}
                height={500}
                className="rounded-lg object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-[Recoleta] text-4xl md:text-6xl font-bold text-black">
                Hello Friends!!
              </h1>
              <p className="md:text-4xl text-2xl mt-4">
                I&apos;m Barkat Ullah, a{" "}
                <span className="font-[Recoleta] underline">
                  Full Stack & WordPress Expert
                </span>
                , and the creator behind various web projects. I&apos;m
                passionate about coding, creating engaging content, and
                empowering others to grow in the tech space.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-4 grid-cols-1 gap-5 bg-white p-5 rounded-xl mt-10"
        >
          {/* Work With */}
          <motion.div
            variants={itemVariants}
            className="bg-[#f9f6f3] rounded-xl p-4 flex flex-col justify-center items-center py-10 px-2"
          >
            <motion.h2
              className="font-[Recoleta] text-4xl font-bold text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 150,
              }}
            >
              Work With
            </motion.h2>
          </motion.div>

          {/* Years of Experience */}
          <motion.div
            variants={itemVariants}
            className="font-[Recoleta] bg-[#f9f6f3] rounded-xl p-4 flex flex-col justify-center items-center py-10 px-2"
          >
            <Counter target={3} duration={1} delay={0.4}>
              {(value) => (
                <motion.h1
                  className="text-5xl font-bold"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.4,
                    type: "spring",
                  }}
                >
                  {value}+
                </motion.h1>
              )}
            </Counter>
            <motion.h3
              className="text-xl text-center mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Years Of Experience
            </motion.h3>
          </motion.div>

          {/* Company */}
          <motion.div
            variants={itemVariants}
            className="font-[Recoleta] bg-[#f9f6f3] rounded-xl p-4 flex flex-col justify-center items-center py-10 px-2"
          >
            <Counter target={20} duration={1.2} delay={0.6}>
              {(value) => (
                <motion.h1
                  className="text-5xl font-bold"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.6,
                    type: "spring",
                  }}
                >
                  {value}+
                </motion.h1>
              )}
            </Counter>
            <motion.h3
              className="text-xl mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Company
            </motion.h3>
          </motion.div>

          {/* Projects */}
          <motion.div
            variants={itemVariants}
            className="font-[Recoleta] bg-[#f9f6f3] rounded-xl p-4 flex flex-col justify-center items-center py-10 px-2"
          >
            <Counter target={80} duration={1.5} delay={0.8}>
              {(value) => (
                <motion.h1
                  className="text-5xl font-bold"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.8,
                    type: "spring",
                  }}
                >
                  {value}+
                </motion.h1>
              )}
            </Counter>
            <motion.h3
              className="text-xl mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              Projects
            </motion.h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Counter component
function Counter({
  target,
  duration,
  delay = 0,
  children,
}: {
  target: number;
  duration: number;
  delay?: number;
  children: (value: number) => React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60); // 60fps

    const timer = setTimeout(() => {
      const animation = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(animation);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60); // 60fps

      return () => clearInterval(animation);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [target, duration, delay]);

  return children(count);
}
