import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const K = "'KoHo', sans-serif";

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: "var(--stone)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <section className="two-col" style={{ flex: 1, paddingTop: "140px", paddingBottom: "80px", paddingLeft: "2.5rem", paddingRight: "2.5rem", display: "flex", alignItems: "center", gap: "4rem" }}>
        <div className="two-col-logo" className="two-col-logo" style={{ width: "40%", flexShrink: 0, display: "flex", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/AAA-logo.png" alt="An Arc Above" style={{ width: "260px", height: "auto" }} />
        </div>
        <div style={{ flex: 1 }}>
          <p className="fs-section-header" style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", lineHeight: 1.6, color: "var(--ink)", marginBottom: "3rem" }}>
            Reach out to us to discuss your design needs and aspirations.
          </p>
          <span className="fs-section-header" style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "var(--ink)", display: "block", marginBottom: "2rem" }}>
            //Contact Us
          </span>
          <p className="fs-section-header" style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", lineHeight: 1.8, color: "var(--ink)", marginBottom: "1.5rem" }}>
            11, 13th Cross 5th main Srinidhi layout,<br />
            Konanakunte, Bangalore — 560062
          </p>
          <p className="fs-section-header" style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "var(--ink)", marginBottom: "1rem" }}>
            +91-98842182133
          </p>
          <p className="fs-section-header" style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "var(--ink)" }}>
            asrakhader@gmail.com
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
