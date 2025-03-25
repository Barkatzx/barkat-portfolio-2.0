"use client";

import heroImage from "@/public/img/barkat-hero.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
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
                Hello Friends
              </h1>
              <p className="md:text-4xl text-2xl mt-4">
                I’m Barkat Ullah, a{" "}
                <span className="font-[Recoleta]">
                  Full Stack & WordPress Expert
                </span>
                , and the creator behind various web projects. I’m passionate
                about coding, creating engaging content, and empowering others
                to grow in the tech space.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
