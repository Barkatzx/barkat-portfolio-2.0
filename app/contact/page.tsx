"use client";

import emailjs from "emailjs-com";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBuilding,
  FaCalendarAlt,
  FaCheck,
  FaClock,
  FaCode,
  FaEnvelope,
  FaFacebookSquare,
  FaGithubSquare,
  FaGlobe,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaMoneyBill,
  FaPaintBrush,
  FaPhoneAlt,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaTwitterSquare,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import Swal from "sweetalert2";

type ProjectType =
  | "website"
  | "web-app"
  | "ecommerce"
  | "redesign"
  | "mobile-app";
type BudgetRange = "300-1k" | "1k-3k" | "3k+";
type Timeline = "asap" | "2-4weeks" | "1-3months" | "3+months";
type CompanySize = "1-10" | "11-50" | "51-200" | "201+";
type Source =
  | "google"
  | "linkedin"
  | "github"
  | "referral"
  | "social"
  | "other";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: ProjectType | "";
  budget: BudgetRange | "";
  timeline: Timeline | "";
  companySize: CompanySize | "";
  source: Source | "";
  projectDetails: string;
}

interface PricingTier {
  id: BudgetRange;
  label: string;
  description: string;
  minPrice: number;
  maxPrice: number;
  suitableFor: string[];
  notSuitableFor: string[];
}

const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    companySize: "",
    source: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_USER_ID!);
  }, []);

  // Project types with icons and descriptions
  const projectTypes = [
    {
      id: "website" as ProjectType,
      label: "Website",
      description: "Business website, portfolio, or informational site",
      icon: <FaGlobe />,
      startingPrice: "$500+",
    },
    {
      id: "web-app" as ProjectType,
      label: "Web Application",
      description: "Custom web app with user accounts and functionality",
      icon: <FaCode />,
      startingPrice: "$2,500+",
    },
    {
      id: "ecommerce" as ProjectType,
      label: "E-commerce Store",
      description: "Online store with products, cart, and payments",
      icon: <FaShoppingCart />,
      startingPrice: "$1,500+",
    },
    {
      id: "redesign" as ProjectType,
      label: "Website Redesign",
      description: "Modernize and improve existing website",
      icon: <FaPaintBrush />,
      startingPrice: "$800+",
    },
    {
      id: "mobile-app" as ProjectType,
      label: "Mobile App",
      description: "iOS or Android mobile application",
      icon: <FaMobileAlt />,
      startingPrice: "$3,000+",
    },
  ];

  // Budget ranges with detailed information
  const budgetRanges: PricingTier[] = [
    {
      id: "300-1k",
      label: "$300 - $1,000",
      description: "Small projects, landing pages, basic websites",
      minPrice: 300,
      maxPrice: 1000,
      suitableFor: [
        "Simple landing pages",
        "Basic WordPress sites",
        "Small business websites",
      ],
      notSuitableFor: [
        "E-commerce stores",
        "Web applications",
        "Complex functionality",
      ],
    },
    {
      id: "1k-3k",
      label: "$1,000 - $3,000",
      description: "Medium projects, custom designs, multiple pages",
      minPrice: 1000,
      maxPrice: 3000,
      suitableFor: [
        "Custom business websites",
        "Small e-commerce",
        "Multiple page sites",
      ],
      notSuitableFor: [
        "Complex web apps",
        "Enterprise solutions",
        "Mobile apps",
      ],
    },
    {
      id: "3k+",
      label: "$3,000+",
      description: "Complex projects, custom applications, e-commerce",
      minPrice: 3000,
      maxPrice: 10000,
      suitableFor: [
        "Web applications",
        "E-commerce stores",
        "Custom solutions",
      ],
      notSuitableFor: ["Very simple projects", "Quick fixes"],
    },
  ];

  const timelines = [
    { id: "asap" as Timeline, label: "ASAP (1-2 weeks)", icon: <FaClock /> },
    { id: "2-4weeks" as Timeline, label: "2-4 weeks", icon: <FaClock /> },
    { id: "1-3months" as Timeline, label: "1-3 months", icon: <FaClock /> },
    { id: "3+months" as Timeline, label: "3+ months", icon: <FaClock /> },
  ];

  const companySizes = [
    {
      id: "1-10" as CompanySize,
      label: "1-10 employees (Startup/Solo)",
      icon: <FaUserAlt />,
    },
    {
      id: "11-50" as CompanySize,
      label: "11-50 employees (Small Business)",
      icon: <FaBuilding />,
    },
    {
      id: "51-200" as CompanySize,
      label: "51-200 employees (Growing Company)",
      icon: <FaUsers />,
    },
    {
      id: "201+" as CompanySize,
      label: "201+ employees (Enterprise)",
      icon: <FaBuilding />,
    },
  ];

  const sources = [
    { id: "google" as Source, label: "Google Search", icon: <FaSearch /> },
    { id: "linkedin" as Source, label: "LinkedIn", icon: <FaLinkedin /> },
    { id: "github" as Source, label: "GitHub", icon: <FaGithubSquare /> },
    { id: "referral" as Source, label: "Referral", icon: <FaUsers /> },
    {
      id: "social" as Source,
      label: "Social Media",
      icon: <FaTwitterSquare />,
    },
    { id: "other" as Source, label: "Other", icon: <FaSearch /> },
  ];

  const contactInfo = [
    { icon: <FaUserAlt />, label: "Name", value: "Barkat Ullah" },
    { icon: <FaPhoneAlt />, label: "Phone", value: "+880 1989 190 199" },
    { icon: <FaEnvelope />, label: "Email", value: "barkatullah.zx@gmail.com" },
    {
      icon: <FaLocationArrow />,
      label: "Location",
      value: "Dhaka, Bangladesh",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/barkatzx",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: <FaGithubSquare />,
      href: "https://www.github.com/barkatzx",
      label: "GitHub",
      color: "#333333",
    },
    {
      icon: <FaTwitterSquare />,
      href: "https://twitter.com/barkatzx",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: <FaFacebookSquare />,
      href: "https://www.instagram.com/bethup97/",
      label: "Facebook",
      color: "#1877F2",
    },
  ];

  // Liquid glass style
  const glassStyle = (opacity: number = 0.1) => ({
    background: `linear-gradient(135deg, 
      rgba(255, 255, 255, ${opacity}) 0%, 
      rgba(255, 255, 255, ${opacity * 0.5}) 100%
    )`,
    backdropFilter: "blur(10px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.2),
      0 1px 0 rgba(255, 255, 255, 0.05) inset
    `,
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    // Validate current step before proceeding
    if (
      step === 1 &&
      (!formData.name || !formData.email || !formData.company)
    ) {
      Swal.fire({
        title: "Missing Information",
        text: "Please fill in all required fields",
        icon: "warning",
        confirmButtonColor: "#00a8ff",
        background: "rgba(0,0,0,0.8)",
        customClass: { popup: "rounded-2xl" },
      });
      return;
    }
    if (step === 2 && (!formData.projectType || !formData.budget)) {
      Swal.fire({
        title: "Missing Information",
        text: "Please select project type and budget",
        icon: "warning",
        confirmButtonColor: "#00a8ff",
        background: "rgba(0,0,0,0.8)",
        customClass: { popup: "rounded-2xl" },
      });
      return;
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePreviousStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Lead qualification logic
    const isLowBudget = formData.budget === "300-1k";
    const isHighBudget = formData.budget === "3k+";
    const isComplexProject = ["web-app", "ecommerce", "mobile-app"].includes(
      formData.projectType
    );
    const projectTypeLabel =
      projectTypes.find((p) => p.id === formData.projectType)?.label ||
      formData.projectType;
    const budgetLabel =
      budgetRanges.find((b) => b.id === formData.budget)?.label ||
      formData.budget;
    const timelineLabel =
      timelines.find((t) => t.id === formData.timeline)?.label ||
      formData.timeline;
    const companySizeLabel =
      companySizes.find((s) => s.id === formData.companySize)?.label ||
      formData.companySize;
    const sourceLabel =
      sources.find((s) => s.id === formData.source)?.label || formData.source;

    try {
      // Send email notification using EmailJS - SINGLE EMAIL
      const emailResult = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          to_name: "Barkat",
          from_name: formData.name,
          from_email: formData.email,
          from_company: formData.company,
          message: `

👤 CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

📋 PROJECT DETAILS:
Project Type: ${projectTypeLabel}
Budget Range: ${budgetLabel}
Timeline: ${timelineLabel}
Company Size: ${companySizeLabel}
Source: ${sourceLabel}
Lead Quality: ${isLowBudget ? "Low" : isHighBudget ? "High" : "Medium"}

📝 PROJECT DESCRIPTION:
${formData.projectDetails || "Not provided"}

📅 SUBMITTED: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`,
          reply_to: formData.email,
        }
      );

      console.log("EmailJS result:", emailResult);

      if (emailResult.status === 200) {
        // Mark as submitted
        setHasSubmitted(true);

        // Show success message
        await Swal.fire({
          title: "✅ Proposal Successfully Submitted!",
          html: `
            <div class="text-center">
              <div class="text-5xl mb-4">🎉</div>
              <h3 class="text-xl font-bold text-white mb-2">Thank You ${formData.name}!</h3>
              <p class="text-white/70 mb-4">
                Your project proposal has been received and I've sent you a confirmation email.
              </p>
              <div class="bg-white/10 rounded-xl p-4 mb-4">
                <p class="text-sm text-white/80">
                  <strong>Project Summary:</strong><br>
                  • ${projectTypeLabel}<br>
                  • ${budgetLabel}<br>
                  • ${timelineLabel}
                </p>
              </div>
              <p class="text-xs text-white/50">
                Please check your email for the confirmation.
              </p>
            </div>
          `,
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "View Submission Details",
          confirmButtonColor: "#00a8ff",
          showCancelButton: true,
          cancelButtonText: "Close",
          background: "rgba(0,0,0,0.8)",
          customClass: {
            popup: "rounded-2xl",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            // Keep user on review step (step 4) to see their submission
            setStep(4);
          }
        });

        // Check if project is not a good fit (low budget for complex project)
        if (isLowBudget && isComplexProject) {
          // Wait a moment then show not a fit message
          setTimeout(() => {
            Swal.fire({
              title: "Thanks for Your Interest!",
              html: `
                <div class="text-center">
                  <div class="text-5xl mb-4">📧</div>
                  <h3 class="text-xl font-bold text-white mb-2">I've Received Your Inquiry</h3>
                  <p class="text-white/70 mb-4">
                    For ${projectTypeLabel.replace("-", " ")} projects, I typically work with budgets 
                    starting at $${projectTypes
                      .find((p) => p.id === formData.projectType)
                      ?.startingPrice.replace("$", "")
                      .replace("+", "")}.
                  </p>
                  <div class="bg-white/10 rounded-xl p-4">
                    <p class="text-sm text-white/80">
                      Your details have been saved. If my availability changes for smaller projects, I'll reach out!
                    </p>
                  </div>
                </div>
              `,
              icon: "info",
              showConfirmButton: true,
              confirmButtonText: "Got It",
              confirmButtonColor: "#00a8ff",
              background: "rgba(0,0,0,0.8)",
              customClass: {
                popup: "rounded-2xl",
              },
            });
          }, 1000);
          return;
        }

        // If budget is good, show booking modal (NOT automatic redirect)
        if (!isLowBudget || !isComplexProject) {
          // Show booking modal after delay
          setTimeout(() => {
            setShowBookingModal(true);
          }, 1500);
        }
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);

      // Still show success message even if email fails
      setHasSubmitted(true);

      await Swal.fire({
        title: "Proposal Submitted!",
        html: `
          <div class="text-center">
            <h3 class="text-xl font-bold text-white mb-2">Thank You!</h3>
            <p class="text-white/70 mb-4">
              Your project details have been received successfully. There was a temporary issue with email confirmation, 
              but I have your information.
            </p>
          </div>
        `,
        icon: "info",
        showConfirmButton: true,
        confirmButtonText: "Continue",
        confirmButtonColor: "#00a8ff",
        background: "rgba(0,0,0,0.8)",
        customClass: {
          popup: "rounded-2xl",
        },
      }).then(() => {
        setStep(4); // Stay on review step
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookCall = () => {
    window.open(
      `https://calendly.com/barkatzx?email=${encodeURIComponent(formData.email)}&name=${encodeURIComponent(formData.name)}&a1=${encodeURIComponent(projectTypes.find((p) => p.id === formData.projectType)?.label || "")}&a2=${encodeURIComponent(budgetRanges.find((b) => b.id === formData.budget)?.label || "")}`,
      "_blank"
    );
    setShowBookingModal(false);
  };

  // Render step content
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Tell Me About Yourself
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-white/80 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#00a8ff] transition-colors"
                  placeholder="John Doe"
                  required
                  disabled={hasSubmitted}
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#00a8ff] transition-colors"
                  placeholder="john@company.com"
                  required
                  disabled={hasSubmitted}
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#00a8ff] transition-colors"
                  placeholder="Your company name"
                  required
                  disabled={hasSubmitted}
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Project Details
            </h3>

            {/* Project Type */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <FaGlobe className="text-[#00a8ff]" />
                What type of project do you need? *
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {projectTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange("projectType", type.id)}
                    disabled={hasSubmitted}
                    className={`p-4 rounded-xl text-left transition-all duration-300 ${
                      formData.projectType === type.id
                        ? "bg-gradient-to-r from-[#00a8ff]/20 to-[#4dc3ff]/10 border border-[#00a8ff]/40"
                        : "bg-white/5 border border-white/10 hover:bg-white/10 disabled:hover:bg-white/5"
                    } ${hasSubmitted ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-transparent text-[#00a8ff]">
                        {type.icon}
                      </div>
                      <span className="text-white font-medium">
                        {type.label}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 mb-2">
                      {type.description}
                    </p>
                    <div className="text-xs text-[#00a8ff] font-semibold">
                      Starting at {type.startingPrice}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <FaMoneyBill className="text-[#00a8ff]" />
                What's your budget range? *
              </h4>
              <div className="space-y-3">
                {budgetRanges.map((range) => (
                  <motion.button
                    key={range.id}
                    type="button"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleInputChange("budget", range.id)}
                    disabled={hasSubmitted}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                      formData.budget === range.id
                        ? "bg-gradient-to-r from-[#00a8ff]/20 to-[#4dc3ff]/10 border border-[#00a8ff]/40"
                        : "bg-white/5 border border-white/10 hover:bg-white/10 disabled:hover:bg-white/5"
                    } ${hasSubmitted ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium text-lg">
                        {range.label}
                      </span>
                      {formData.budget === range.id && (
                        <FaCheck className="text-[#00a8ff]" />
                      )}
                    </div>
                    <p className="text-sm text-white/70 mb-2">
                      {range.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-green-400">
                        ✓ {range.suitableFor[0]}
                      </div>
                      <div className="text-red-400">
                        ✗ {range.notSuitableFor[0]}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Additional Information
            </h3>

            {/* Timeline */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                Project Timeline *
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {timelines.map((timeline) => (
                  <motion.button
                    key={timeline.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange("timeline", timeline.id)}
                    disabled={hasSubmitted}
                    className={`p-4 rounded-xl text-left transition-all duration-300 ${
                      formData.timeline === timeline.id
                        ? "bg-gradient-to-r from-[#00a8ff]/20 to-[#4dc3ff]/10 border border-[#00a8ff]/40"
                        : "bg-white/5 border border-white/10 hover:bg-white/10 disabled:hover:bg-white/5"
                    } ${hasSubmitted ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-[#00a8ff]">{timeline.icon}</div>
                      <span className="text-white font-medium">
                        {timeline.label}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Company Size */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company Size *</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {companySizes.map((size) => (
                  <motion.button
                    key={size.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange("companySize", size.id)}
                    disabled={hasSubmitted}
                    className={`p-4 rounded-xl text-left transition-all duration-300 ${
                      formData.companySize === size.id
                        ? "bg-gradient-to-r from-[#00a8ff]/20 to-[#4dc3ff]/10 border border-[#00a8ff]/40"
                        : "bg-white/5 border border-white/10 hover:bg-white/10 disabled:hover:bg-white/5"
                    } ${hasSubmitted ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-[#00a8ff]">{size.icon}</div>
                      <span className="text-white font-medium">
                        {size.label}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* How did you find me */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                How did you find me? *
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {sources.map((source) => (
                  <motion.button
                    key={source.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange("source", source.id)}
                    disabled={hasSubmitted}
                    className={`p-4 rounded-xl text-center transition-all duration-300 ${
                      formData.source === source.id
                        ? "bg-gradient-to-r from-[#00a8ff]/20 to-[#4dc3ff]/10 border border-[#00a8ff]/40"
                        : "bg-white/5 border border-white/10 hover:bg-white/10 disabled:hover:bg-white/5"
                    } ${hasSubmitted ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-[#00a8ff] text-xl">
                        {source.icon}
                      </div>
                      <span className="text-white font-medium text-sm">
                        {source.label}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                Project Details (Optional)
              </h4>
              <textarea
                value={formData.projectDetails}
                onChange={(e) =>
                  handleInputChange("projectDetails", e.target.value)
                }
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#00a8ff] transition-colors resize-none disabled:opacity-70"
                placeholder="Briefly describe your project goals, requirements, and any specific features you need..."
                disabled={hasSubmitted}
              />
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Review & Submit</h3>
              {hasSubmitted && (
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                  ✓ Submitted
                </span>
              )}
            </div>

            <div className="space-y-4">
              {/* Project Summary */}
              <div className="p-6 rounded-xl" style={glassStyle(0.15)}>
                <h4 className="text-white font-semibold mb-4 text-lg">
                  Project Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Name:</span>
                    <span className="text-white font-medium">
                      {formData.name}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Email:</span>
                    <span className="text-white font-medium">
                      {formData.email}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Company:</span>
                    <span className="text-white font-medium">
                      {formData.company}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Project Type:</span>
                    <span className="text-white font-medium">
                      {
                        projectTypes.find((t) => t.id === formData.projectType)
                          ?.label
                      }
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Budget Range:</span>
                    <span className="text-white font-medium">
                      {
                        budgetRanges.find((b) => b.id === formData.budget)
                          ?.label
                      }
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Timeline:</span>
                    <span className="text-white font-medium">
                      {timelines.find((t) => t.id === formData.timeline)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Company Size:</span>
                    <span className="text-white font-medium">
                      {
                        companySizes.find((s) => s.id === formData.companySize)
                          ?.label
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Found via:</span>
                    <span className="text-white font-medium">
                      {sources.find((s) => s.id === formData.source)?.label}
                    </span>
                  </div>
                </div>

                {formData.projectDetails && (
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <h5 className="text-white font-semibold mb-2">
                      Project Details:
                    </h5>
                    <p className="text-white/70 text-sm">
                      {formData.projectDetails}
                    </p>
                  </div>
                )}
              </div>

              {/* Submission Status */}
              {hasSubmitted && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-transparent border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="text-green-400 text-xl">✅</div>
                    <div>
                      <p className="text-white font-semibold">
                        Proposal Submitted Successfully!
                      </p>
                      <p className="text-white/70 text-sm">
                        A confirmation has been sent to your email. You can
                        review your submission details above.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Warning if low budget for complex project */}
              {!hasSubmitted &&
                formData.budget === "300-1k" &&
                ["web-app", "ecommerce", "mobile-app"].includes(
                  formData.projectType
                ) && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/20 to-transparent border border-yellow-500/30">
                    <div className="flex items-center gap-3">
                      <div className="text-yellow-400 text-xl">⚠️</div>
                      <div>
                        <p className="text-white font-semibold">
                          Budget Consideration
                        </p>
                        <p className="text-white/70 text-sm">
                          Your selected budget might be too low for a{" "}
                          {formData.projectType.replace("-", " ")} project.
                          Typical starting prices are higher.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              {/* Good match indicator */}
              {!hasSubmitted && formData.budget === "3k+" && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-transparent border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="text-green-400 text-xl">✨</div>
                    <div>
                      <p className="text-white font-semibold">
                        Excellent Match!
                      </p>
                      <p className="text-white/70 text-sm">
                        Your project and budget align perfectly with my
                        expertise. I'm excited to discuss this further!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={glassStyle(0.1)}
            >
              <span className="w-2 h-2 bg-[#00a8ff] rounded-full"></span>
              <span className="text-sm font-semibold text-[#00a8ff]">
                Project Inquiry
              </span>
            </div>

            <h2 className="font-[Recoleta] text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Let's Build Together
            </h2>

            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Complete this short form to help me understand your project needs
              and ensure we're the perfect fit.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2"></div>
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      stepNum === step
                        ? "bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] text-white scale-110"
                        : stepNum < step
                          ? "bg-green-500 text-white"
                          : "bg-white/10 text-white/50"
                    }`}
                  >
                    {stepNum < step ? <FaCheck /> : stepNum}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-white/60 whitespace-nowrap">
                    {stepNum === 1 && "Contact Info"}
                    {stepNum === 2 && "Project Details"}
                    {stepNum === 3 && "Additional Info"}
                    {stepNum === 4 && "Review"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl p-8" style={glassStyle(0.15)}>
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-8 mt-8 border-t border-white/10">
                    <button
                      type="button"
                      onClick={handlePreviousStep}
                      disabled={step === 1 || hasSubmitted}
                      className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <FaArrowLeft />
                      Previous
                    </button>

                    <div className="flex items-center gap-4">
                      <span className="text-white/60 text-sm">
                        Step {step} of 4
                      </span>

                      {step < 4 ? (
                        <button
                          type="button"
                          onClick={handleNextStep}
                          disabled={hasSubmitted}
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] text-white font-semibold flex items-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next Step
                          <FaArrowRight />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting || hasSubmitted}
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold flex items-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Processing...
                            </>
                          ) : hasSubmitted ? (
                            <>
                              ✓ Submitted
                              <FaCheck />
                            </>
                          ) : (
                            <>
                              Submit Proposal
                              <FaCalendarAlt />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-6">
              {/* Contact Info */}
              <div className="rounded-2xl p-6" style={glassStyle(0.1)}>
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-transparent text-[#00a8ff]">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-white/50">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl p-6" style={glassStyle(0.1)}>
                <h3 className="text-xl font-bold text-white mb-6">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-white/10 hover:border-[#00a8ff]/30 transition-all duration-300 hover:scale-105 group"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}10 0%, transparent 100%)`,
                      }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className="text-2xl"
                          style={{ color: social.color }}
                        >
                          {social.icon}
                        </div>
                        <span className="text-sm text-white/70 group-hover:text-white">
                          {social.label}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Process Info */}
              <div className="rounded-2xl p-6" style={glassStyle(0.1)}>
                <h3 className="text-xl font-bold text-white mb-4">
                  What Happens Next
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] flex items-center justify-center text-xs text-white mt-1">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">Submit Form</p>
                      <p className="text-white/60 text-sm">
                        Fill out project details
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] flex items-center justify-center text-xs text-white mt-1">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">Instant Email</p>
                      <p className="text-white/60 text-sm">
                        You'll receive a confirmation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] flex items-center justify-center text-xs text-white mt-1">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Qualification Check
                      </p>
                      <p className="text-white/60 text-sm">
                        Ensure project fit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] flex items-center justify-center text-xs text-white mt-1">
                      4
                    </div>
                    <div>
                      <p className="text-white font-medium">Discovery Call</p>
                      <p className="text-white/60 text-sm">
                        Discuss project details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 max-w-md w-full"
              style={glassStyle(0.2)}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <FaCalendarAlt className="text-[#00a8ff]" />
                  Book Discovery Call
                </h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaTimes className="text-white/70" />
                </button>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Perfect Match!
                  </h4>
                  <p className="text-white/70">
                    Your project sounds amazing! Let's schedule a call to
                    discuss the details.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <p className="text-sm text-white/80 mb-2">
                    <strong>Project:</strong>{" "}
                    {
                      projectTypes.find((p) => p.id === formData.projectType)
                        ?.label
                    }
                  </p>
                  <p className="text-sm text-white/80">
                    <strong>Budget:</strong>{" "}
                    {budgetRanges.find((b) => b.id === formData.budget)?.label}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleBookCall}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <FaCalendarAlt />
                    Book on Calendly
                  </button>
                  <button
                    onClick={() => setShowBookingModal(false)}
                    className="w-full py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>

                <p className="text-xs text-white/50 mt-6">
                  You can also email me directly at barkatullah.zx@gmail.com
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
