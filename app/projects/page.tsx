"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

const K = "'KoHo', sans-serif";

const filters = [
  { label: "View All", value: "all" },
  { label: "Architecture", value: "architecture" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Ongoing", value: "ongoing" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeFilter);

  return (
    <main style={{ backgroundColor: "var(--stone)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div style={{ paddingTop: "130px", paddingLeft: "2.5rem", paddingRight: "2.5rem", paddingBottom: "2rem", display: "flex", gap: "2.5rem", borderBottom: "1px solid rgba(26,25,24,0.1)", flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            style={{
              fontFamily: K, fontWeight: 400, fontSize: "28px",
              color: "var(--ink)", opacity: activeFilter === f.value ? 1 : 0.35,
              background: "none", border: "none", cursor: "pointer",
              padding: 0, transition: "opacity 0.3s ease",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, padding: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div style={{ cursor: "pointer" }}>
              <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.cover}
                  alt={project.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.4s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                /></div>
              <div style={{ paddingTop: "1rem", paddingBottom: "0.5rem" }}>
                <p style={{ fontFamily: K, fontWeight: 600, fontSize: "32px", color: "var(--ink)", marginBottom: "0.25rem" }}>
                  {project.name}
                </p>
                <p style={{ fontFamily: K, fontWeight: 300, fontSize: "24px", color: "var(--ink)", opacity: 0.5 }}>
                  {project.category}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </main>
  );
}
