import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

const K = "'KoHo', sans-serif";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main style={{ backgroundColor: "var(--stone)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Hero image */}
      <div style={{ paddingTop: "100px", width: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.cover}
          alt={project.name}
          style={{ width: "100%", height: "70vh", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
      </div>

      {/* Project info */}
      <section style={{ padding: "4rem 2.5rem", borderBottom: "1px solid rgba(26,25,24,0.1)" }}>
        <Link
          href="/projects"
          style={{
            fontFamily: K, fontWeight: 400, fontSize: "24px",
            color: "var(--ink)", opacity: 0.5, textDecoration: "none",
            display: "inline-block", marginBottom: "2rem",
          }}
        >
          ← Back to Projects
        </Link>
        <p style={{ fontFamily: K, fontWeight: 400, fontSize: "24px", color: "var(--ink)", opacity: 0.5, marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          {project.category}
        </p>
        <h1 style={{ fontFamily: K, fontWeight: 600, fontSize: "48px", color: "var(--ink)", marginBottom: "2rem" }}>
          {project.name}
        </h1>
        {project.description ? (
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", lineHeight: 1.7, color: "var(--ink)", maxWidth: "720px" }}>
            {project.description}
          </p>
        ) : (
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", lineHeight: 1.7, color: "var(--ink)", opacity: 0.3 }}>
            Description coming soon.
          </p>
        )}
      </section>

      {/* Detail image grid */}
      <section className="detail-grid" className="detail-grid" style={{ padding: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", flex: 1 }}>
        {project.detail.map((src, i) => (
          <div key={i} style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${project.name} — ${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
