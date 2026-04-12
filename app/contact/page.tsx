"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#255c8f]">
          Contact
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          Let&apos;s build something together.
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-slate-700">
          Tell me a bit about your project, and I&apos;ll get back to you with
          practical next steps.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)] items-start">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-slate-800"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-[#255c8f]/40 focus:ring-2"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-800"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-[#255c8f]/40 focus:ring-2"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-slate-800"
            >
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-[#255c8f]/40 focus:ring-2"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-[#255c8f] px-5 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/60 hover:bg-[#1e4b77] transition"
          >
            Send message
          </button>

          {status === "submitted" && (
            <p className="text-xs text-[#255c8f] pt-2">
              Thanks for reaching out! This demo form doesn&apos;t send yet, but
              your message structure looks good.
            </p>
          )}
        </form>

        <aside className="space-y-4 text-sm text-slate-700">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm">
            <h2 className="text-sm font-medium text-slate-900">
              Direct contact
            </h2>
            <p>
              Prefer to skip the form? Reach out directly and share a short
              brief.
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <span className="text-slate-400">Email:</span>{" "}
                <a
                  href="mailto:hello@gigamike.net"
                  className="text-[#c7def5] hover:text-white"
                >
                  hello@gigamike.net
                </a>
              </li>
              <li>
                <span className="text-slate-400">WhatsApp / Messenger:</span>{" "}
                Available on request after initial email.
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

