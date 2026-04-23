import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const K = "'KoHo', sans-serif";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "var(--stone)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <section style={{ flex: 1, paddingTop: "140px", paddingBottom: "80px", paddingLeft: "2.5rem", paddingRight: "2.5rem", display: "flex", alignItems: "flex-start", gap: "4rem" }}>
        <div style={{ flex: 1 }}>
          <span style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "var(--ink)", display: "block", marginBottom: "2rem" }}>
            //The Studio
          </span>
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", lineHeight: 1.7, color: "var(--ink)", marginBottom: "2rem" }}>
            An Arc Above is a design consultancy with expertise in Architectural
            &amp; Interior design. We offer contextually relevant design
            interventions to create authentic, meaningful and timeless spaces.
            Over the last 7 years, we have strived to create spaces marrying
            context and aesthetics with depth and personality.
          </p>
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", lineHeight: 1.7, color: "var(--ink)", marginBottom: "4rem" }}>
            We follow a research-based empathy driven design process reflecting
            the individuality of the people who inhabit the space. Our designs
            are informed by a deep understanding of our clients&apos; needs,
            preferences and values to create spaces which holistically support
            their lifestyle and comfort.
          </p>
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "var(--ink)", marginBottom: "0.5rem" }}>
            ASRA KHADER
          </p>
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "var(--ink)", opacity: 0.6 }}>
            Principal Architect
          </p>
        </div>
        <div style={{ flexShrink: 0, width: "320px", display: "flex", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/AAA-logo.png" alt="An Arc Above" style={{ width: "240px", height: "auto" }} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
