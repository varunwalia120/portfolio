"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";

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

    if (!name || name.trim().length < 2) {
      newErrors.name = "Please enter your name";
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!subject || subject.trim().length < 3) {
      newErrors.subject = "Please add a subject";
    }
    if (!message || message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

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
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 font-mono text-sm text-accent"
      >
        06 — Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-4 text-3xl font-bold sm:text-4xl"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mb-10 text-muted-foreground"
      >
        Have a project, an opportunity, or just want to talk data? My inbox
        is open.
      </motion.p>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card py-16 text-center"
        >
          <CheckCircle2 className="text-accent" size={40} />
          <p className="font-medium">Message sent — thanks for reaching out.</p>
          <p className="text-sm text-muted-foreground">
            I&apos;ll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="from_name" className="mb-1.5 block text-sm">
              Name
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="from_email" className="mb-1.5 block text-sm">
              Email
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong sending that — try again, or email me
              directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
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
        </motion.form>
      )}
    </section>
  );
}