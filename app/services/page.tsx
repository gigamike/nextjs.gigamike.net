const services = [
  {
    title: "Web App Development",
    description:
      "Design and build robust web applications that are cleanly architected, well-documented, and ready to scale with your business.",
    details: [
      "Modern, responsive UI built with React and Next.js",
      "Clear separation of concerns and maintainable codebases",
      "Role-based access, auditability, and performance in mind",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Bring your product to mobile with performant, user-friendly apps that integrate cleanly with your backend and third-party APIs.",
    details: [
      "Cross-platform approaches where it makes sense",
      "Consistent design language across web and mobile",
      "Deep integration with existing APIs and systems",
    ],
  },
  {
    title: "API & Stripe Integration",
    description:
      "Design, build, or integrate REST/GraphQL APIs, including secure payments and subscription flows with Stripe.",
    details: [
      "Robust API design and documentation",
      "Stripe payments, subscriptions, webhooks, and invoicing",
      "Practical error handling, logging, and monitoring",
    ],
  },
  {
    title: "CRM Systems & AI-powered Tools",
    description:
      "Custom CRMs and AI-powered systems that automate workflows, surface insights, and help teams move faster.",
    details: [
      "Tailored CRM systems that match your actual processes",
      "AI assistants for lead scoring, triage, and summarization",
      "Secure, auditable data flows that respect your constraints",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#255c8f]">
          Services
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          I build scalable web apps and AI-powered systems that grow businesses.
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-slate-700">
          I offer end-to-end Web and Mobile Development, from architecture and
          implementation to integrations and production readiness.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 space-y-3 shadow-sm"
          >
            <h2 className="text-sm font-semibold text-slate-900">
              {service.title}
            </h2>
            <p className="text-xs md:text-sm text-slate-700">
              {service.description}
            </p>
            <ul className="text-xs md:text-sm text-slate-700 space-y-1.5">
              {service.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#255c8f]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

