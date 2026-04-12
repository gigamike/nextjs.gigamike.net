type BlogPost = {
  title: string;
  link: string;
  publishedAt?: string;
};

async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch("https://www.alexachamp.com/feed", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch blog feed", res.status);
    return [];
  }

  const xml = await res.text();

  // Very small RSS parsing without dependencies:
  const items = xml.split("<item>").slice(1);

  return items.slice(0, 10).map((item) => {
    const getTag = (tag: string) => {
      const match = item.match(
        new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"),
      );
      return match ? match[1].trim() : "";
    };

    const title = getTag("title");
    const link = getTag("link");
    const pubDate = getTag("pubDate");

    return {
      title,
      link,
      publishedAt: pubDate ? new Date(pubDate).toISOString() : undefined,
    };
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#255c8f]">
          Blog / Insights
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          Sharing what I learn along the way.
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-slate-700">
          Articles and insights pulled from my writing on architecture, Stripe,
          AI, and building systems that actually support businesses.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-sm text-slate-500">
          Blog posts are loading or temporarily unavailable. Please check back
          soon.
        </p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li
              key={post.link}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <h2 className="text-sm font-medium text-slate-900">
                  {post.title}
                </h2>
                {post.publishedAt && (
                  <p className="mt-1 text-xs text-slate-500">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

