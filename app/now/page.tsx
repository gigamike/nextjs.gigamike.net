export default function NowPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#255c8f]">
          Now
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          What I&apos;m focused on right now.
        </h1>
      </header>

      <div className="space-y-4 text-sm md:text-base text-slate-700">
        <p>
          Exploring ways to combine solid engineering practices with practical
          AI to help businesses ship faster and with more confidence.
        </p>
        <ul className="space-y-2">
          <li>– Prototyping AI-assisted internal tools and CRMs</li>
          <li>– Refining Stripe subscription and billing flows</li>
          <li>– Investing in better developer experience and tooling</li>
        </ul>
      </div>
    </section>
  );
}

