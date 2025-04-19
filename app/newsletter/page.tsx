"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="mb-5">
      <div className="bg-[#f9f6f3] px-5 md:px-20 py-10 z-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="font-[Hind] text-5xl md:text-7xl mb-4">
            প্রোডাক্টিভিটি ও জীবন-পরামর্শ: সাপ্তাহিক নিউজলেটার 📈
          </h2>
          <p className="font-[Hind] text-xl">
            প্রতি সপ্তাহে আপনার ইনবক্সে পৌঁছে যাবে কার্যকরী প্রোডাক্টিভিটি টিপস,
            ব্যবহারিক জীবন-পরামর্শ এবং আমার প্রিয় বইগুলোর মূল্যবান অংশ। আপনার
            কাজ ও জীবনকে আরও সহজ এবং ফলপ্রসূ করতে আজই সাবস্ক্রাইব করুন! 🚀
          </p>
        </motion.div>
      </div>
      <div className="bg-[#fdf9f6] rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 shadow-lg">
        {/* Left */}
        <div className="sm:w-1/2 space-y-4">
          <h2 className="text-3xl sm:text-4xl leading-snug text-gray-900">
            Subscribe to{" "}
            <span className="block text-4xl sm:text-5xl font-[Recoleta]">
              Newsletter
            </span>
          </h2>
          <p className="text-gray-700 font-medium">
            Join a community of thousands of curious minds who learn and grow
            together every day!
          </p>
        </div>

        {/* Right */}
        <div className="sm:w-1/2 space-y-4">
          <p className="text-gray-800 leading-relaxed">
            Each week, I share actionable productivity tips, practical life
            advice, and highlights from my favourite books, directly to your
            inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex rounded-full bg-white p-1 border border-gray-300 w-full shadow-sm overflow-hidden"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 focus:outline-none rounded-full text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="text-green-600 text-sm">Thanks for subscribing!</p>
          )}
          <p className="text-sm text-gray-500">
            By submitting this form, you’ll be signed up to my free newsletter,
            which may mention my books, apps, and courses. You can opt-out at
            any time with no hard feelings 😊. Here’s our{" "}
            <a href="/privacy" className="text-blue-500 underline">
              privacy policy
            </a>{" "}
            if you like reading.
          </p>
        </div>
      </div>
    </section>
  );
}
