export default function AboutPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#255c8f]">
          About
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          Software craftsman, not just a developer.
        </h1>
      </header>

      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)]">
        <article className="space-y-4 text-sm md:text-base leading-relaxed text-slate-700">
          <p>
            Hello! I&apos;m Michael Gerard Galon a.k.a. GigaMike. I am a Full
            Stack Developer with extensive real-world experience. I consider
            myself a software craftsman rather than a simple programmer because
            I obsess over every detail of the applications that I develop.
          </p>
          <p>
            My commitment includes providing well documented and extensible
            projects that my clients can extend and maintain for years after I
            am gone. Clean architecture, predictable deployments, and practical
            DX matter just as much to me as the UI that users see.
          </p>
          <p>
            I am open to work on projects from anywhere. Thank you for your
            interest. I look forward to working with you.
          </p>
        </article>

        <section className="space-y-5">
          <div>
            <h2 className="text-sm font-medium text-slate-900 mb-2">
              Core skills &amp; tech stack
            </h2>
            <dl className="text-xs md:text-sm space-y-2 text-slate-700">
              <div>
                <dt className="font-semibold text-slate-900">Backend</dt>
                <dd>PHP, Laravel, Node.js, REST APIs, GraphQL, MySQL, PostgreSQL</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Frontend</dt>
                <dd>React, Next.js, TypeScript, Tailwind CSS, responsive UI</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Cloud &amp; DevOps</dt>
                <dd>AWS, Docker, CI/CD, monitoring, production observability</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Product &amp; Systems</dt>
                <dd>CRM systems, Stripe integrations, workflow automation, AI-powered tools</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </section>
  );
}
