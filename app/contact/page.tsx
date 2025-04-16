"use client";

import emailjs from "emailjs-com";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitterSquare,
  FaUserAlt,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_USER_ID!
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Message has been sent",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.currentTarget.reset();
    }
  };

  return (
    <div className="container mx-auto">
      <div className="px-5 md:px-20 py-10 bg-[#f9f6f3]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[Recoleta] text-5xl md:text-7xl mb-4">
            Let&apos;s Connect and Discuss Your Ideas 💡
          </h2>
          <p className="text-xl">
            Have a question, project, or idea you&apos;d like to discuss? Feel
            free to reach out! I’m always open to new opportunities and
            collaborations. Drop a message, and I&apos;ll get back to you as
            soon as possible.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-5 md:px-20 py-10 gap-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="font-[Recoleta] text-2xl mb-6">Contact With Me</h2>
          <form ref={form} onSubmit={handleSend} className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                className="w-full px-4 py-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                className="w-full px-4 py-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="w-full px-4 py-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="w-full px-4 py-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="message"
              id="message"
              cols={30}
              rows={5}
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              value="Send Message"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition duration-300"
            >
              <span className="text-xl">Send Message</span>
              <MdSend className="text-xl" />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="w-full md:w-1/2 mt-8 md:mt-0"
        >
          <h2 className="font-[Recoleta] text-2xl mb-6">Contact Information</h2>

          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl mr-6 text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300" />
            <h3 className="text-xl text-blue-500 font-medium">Barkat Ullah</h3>
          </div>

          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl mr-6 text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300" />
            <h3 className="text-xl text-blue-500 font-medium">
              +880 1989 190 199
            </h3>
          </div>

          <div className="flex items-center my-6">
            <MdEmail className="text-2xl mr-6 text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300" />
            <h3 className="text-xl text-blue-500 font-medium">
              barkatullah.zx@gmail.com
            </h3>
          </div>

          <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl mr-6 text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300" />
            <h3 className="text-xl text-blue-500 font-medium">
              Dhaka, Bangladesh
            </h3>
          </div>

          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-gray-800">Social</h3>
            <div className="bg-gray-400 w-10 h-px mx-4"></div>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com/in/barkatzx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 hover:text-blue-500 hover:-translate-y-1.5 shadow-sm transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.github.com/barkatzx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 hover:text-blue-500 hover:-translate-y-1.5 shadow-sm transition duration-300"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://twitter.com/barkatzx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 hover:text-blue-500 hover:-translate-y-1.5 shadow-sm transition duration-300"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="https://www.instagram.com/bethup97/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 hover:text-blue-500 hover:-translate-y-1.5 shadow-sm transition duration-300"
              >
                <FaFacebookSquare />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
