const projects = [
  {
    title: "Gigamike Portfolio",
    role: "Full-stack design & build",
    problem:
      "Create a focused, high-performing personal site that clearly communicates services, skills, and authority to potential clients.",
    solution:
      "Designed and implemented a content-driven portfolio using modern Next.js, server components, and a minimal, fast dark UI optimized for clarity.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Server Components"],
    result:
      "Improved clarity around my service offerings and created a foundation to showcase new case studies, articles, and experiments.",
    link: "https://gigamike.net",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#255c8f]">
          Projects
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          Case-study style work.
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-slate-700">
          Each project is treated as a product: clear problem definition,
          pragmatic technical choices, and measurable impact where possible.
        </p>
      </header>

      <div className="space-y-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 space-y-4 shadow-sm"
          >
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h2>
                <p className="text-xs text-slate-500">{project.role}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-xs font-medium text-[#c7def5] hover:text-white underline underline-offset-4"
              >
                View live
              </a>
            </header>

            <dl className="grid gap-4 text-sm text-slate-700 md:grid-cols-2">
              <div>
                <dt className="font-semibold text-slate-900 mb-1">Problem</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 mb-1">Solution</dt>
                <dd>{project.solution}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 mb-1">Tech used</dt>
                <dd className="flex flex-wrap gap-2 mt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-3 py-1 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 mb-1">Result</dt>
                <dd>{project.result}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
