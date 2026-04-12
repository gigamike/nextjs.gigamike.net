export default function Home() {
  return (
    <section className="space-y-10">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
         
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#255c8f]">
            Home
          </p>
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
          I build scalable web apps and AI-powered systems that grow businesses.
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-slate-700">
          Hello! I&apos;m Michael Gerard Galon a.k.a. GigaMike. I am a Full
          Stack Developer with extensive real-world experience. I consider
          myself a software craftsman rather than a simple programmer because I
          obsess over every detail of the applications that I develop. My
          commitment includes providing well documented and extensible projects
          that my clients can extend and maintain for years after I am gone.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-slate-700">
          I am open to work on projects from anywhere. Thank you for your
          interest. I look forward to working with you.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#255c8f] px-5 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/60 hover:bg-[#1e4b77] transition"
          >
            Hire me
          </a>
          <a
            href="mailto:gigamike@gigamike.net"
            className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-800 hover:border-[#255c8f] hover:text-[#255c8f] transition"
          >
            Email me
          </a>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,1.3fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-medium text-slate-900">
              Featured project
            </h2>
            <span className="inline-flex items-center rounded-full bg-[#255c8f]/10 px-3 py-1 text-[11px] font-medium text-[#c7def5] border border-[#255c8f]/40">
              Case study
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            gigamike.net
          </p>
          <p className="text-sm text-slate-700">
            This portfolio itself is a living case study of how I design,
            architect, and ship production-ready experiences with modern web
            technologies.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-700">
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Next.js
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              TypeScript
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Server Components
            </span>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://gigamike.net"
              className="text-xs font-medium text-[#255c8f] hover:text-[#1e4b77] underline underline-offset-4"
            >
              View live site
            </a>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-medium text-slate-900">
            What I can help you with
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✅ Scalable web applications and internal tools</li>
            <li>✅ Stripe, payment flows, and subscription systems</li>
            <li>✅ AI-powered features and workflow automation</li>
            <li>✅ CRM systems and custom business platforms</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
