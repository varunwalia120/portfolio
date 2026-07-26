"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {};

    const name = formData.get("from_name") as string;
    const email = formData.get("from_email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2)
      newErrors.name = "Please enter your name";

    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Please enter a valid email";

    if (!subject || subject.trim().length < 3)
      newErrors.subject = "Please add a subject";

    if (!message || message.trim().length < 10)
      newErrors.message = "Message should be at least 10 characters";

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validate(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
    >
      {/* Section Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-[850px]
            w-[850px]
            rounded-full
            bg-blue-500/6
            blur-[190px]
          "
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-sm text-accent"
        >
          06 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-12 max-w-2xl text-lg leading-8 text-muted-foreground"
        >
          Have a project, an opportunity, or just want to talk data? My inbox
          is always open.
        </motion.p>
        {status === "success" ? (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-16
      text-center
      backdrop-blur-xl
    "
  >
    <CheckCircle2
      className="mx-auto mb-5 text-accent"
      size={48}
    />

    <h3 className="mb-2 text-2xl font-bold">
      Message Sent!
    </h3>

    <p className="text-muted-foreground">
      Thanks for reaching out. I'll get back to you soon.
    </p>
  </motion.div>
) : (
  <div
    className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-10
      backdrop-blur-xl
    "
  >
    {/* Card Ambient Glow */}

    <div
      className="
        pointer-events-none
        absolute
        -right-32
        -top-32
        h-72
        w-72
        rounded-full
        bg-blue-500/8
        blur-[120px]
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
    />

    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      noValidate
      className="relative z-10 space-y-7"
    >
      
  {/* Name */}

  <div>
    <label
      htmlFor="from_name"
      className="mb-2 block text-sm font-medium text-muted-foreground"
    >
      Name
    </label>

    <input
      id="from_name"
      name="from_name"
      type="text"
      className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/[0.04]
        px-5
        py-3
        outline-none
        transition-all
        duration-300
        focus:border-accent
        focus:ring-2
        focus:ring-blue-500/20
      "
    />

    {errors.name && (
      <p className="mt-2 text-sm text-red-400">
        {errors.name}
      </p>
    )}
  </div>

  {/* Email */}

  <div>
    <label
      htmlFor="from_email"
      className="mb-2 block text-sm font-medium text-muted-foreground"
    >
      Email
    </label>

    <input
      id="from_email"
      name="from_email"
      type="email"
      className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/[0.04]
        px-5
        py-3
        outline-none
        transition-all
        duration-300
        focus:border-accent
        focus:ring-2
        focus:ring-blue-500/20
      "
    />

    {errors.email && (
      <p className="mt-2 text-sm text-red-400">
        {errors.email}
      </p>
    )}
  </div>

  {/* Subject */}

  <div>
    <label
      htmlFor="subject"
      className="mb-2 block text-sm font-medium text-muted-foreground"
    >
      Subject
    </label>

    <input
      id="subject"
      name="subject"
      type="text"
      className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/[0.04]
        px-5
        py-3
        outline-none
        transition-all
        duration-300
        focus:border-accent
        focus:ring-2
        focus:ring-blue-500/20
      "
    />

    {errors.subject && (
      <p className="mt-2 text-sm text-red-400">
        {errors.subject}
      </p>
    )}
  </div>

  {/* Message */}

  <div>
    <label
      htmlFor="message"
      className="mb-2 block text-sm font-medium text-muted-foreground"
    >
      Message
    </label>

    <textarea
      id="message"
      name="message"
      rows={6}
      className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/[0.04]
        px-5
        py-4
        outline-none
        transition-all
        duration-300
        focus:border-accent
        focus:ring-2
        focus:ring-blue-500/20
      "
    />

    {errors.message && (
      <p className="mt-2 text-sm text-red-400">
        {errors.message}
      </p>
    )}
  </div>

  {status === "error" && (
    <p className="text-red-400">
      Something went wrong. Please try again.
    </p>
  )}

  <Magnetic>
    <button
      type="submit"
      disabled={status === "sending"}
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        bg-gradient-to-r
        from-blue-500
        to-blue-600
        px-8
        py-4
        font-medium
        text-white
        shadow-[0_10px_35px_rgba(59,130,246,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_45px_rgba(59,130,246,0.35)]
        disabled:opacity-60
      "
    >
      {status === "sending" ? (
        <>
          <Loader2 className="animate-spin" size={18} />
          Sending...
        </>
      ) : (
        <>
          <Mail size={18} />
          Send Message
        </>
      )}
    </button>
  </Magnetic>
</motion.form>
</div>
)}
      </div>
    </section>
  );
}