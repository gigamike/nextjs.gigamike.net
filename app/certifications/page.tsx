type Certification = {
  id: string | number;
  name: string;
  issuer?: string;
  issued_at?: string;
  url?: string;
};

async function getCertifications(): Promise<Certification[]> {
  const res = await fetch("https://api.gigamike.net/api/certifications", {
    // These are external, dynamic per request
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch certifications", res.status);
    return [];
  }

  const data = await res.json();
  // Accept either array or { data: [] }
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.data)) return data.data;
  return [];
}

export default async function CertificationsPage() {
  const certifications = await getCertifications();

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#255c8f]">
          Certifications
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          Proof of continuous learning.
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-slate-700">
          A snapshot of the courses, specializations, and programs I&apos;ve
          completed over the years.
        </p>
      </header>

      {certifications.length === 0 ? (
        <p className="text-sm text-slate-500">
          Certifications are loading or temporarily unavailable. Please check
          back soon.
        </p>
      ) : (
        <ul className="grid gap-4 md:gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <li
              key={cert.id}
              className="rounded-xl border border-slate-200 bg-white p-4 space-y-2 shadow-sm"
            >
              <h2 className="text-sm font-semibold text-slate-900">
                {cert.name}
              </h2>
              {cert.issuer && (
                <p className="text-xs text-slate-500">{cert.issuer}</p>
              )}
              {cert.issued_at && (
                <p className="text-xs text-slate-500">
                  Issued {new Date(cert.issued_at).toLocaleDateString()}
                </p>
              )}
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-xs font-medium text-[#c7def5] hover:text-white underline underline-offset-4"
                >
                  View certificate
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
