const K = "'KoHo', sans-serif";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#455366", padding: "4rem 2.5rem 2rem 2.5rem" }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* Logo — 30% */}
        <div style={{ width: "30%", flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/AAA-logo.png" alt="An Arc Above" style={{ height: "160px", width: "auto", display: "block" }} />
        </div>

        {/* Contact — 40% */}
        <div style={{ width: "40%", flexShrink: 0, paddingRight: "2rem" }}>
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "rgba(228,224,215,0.7)", marginBottom: "1.5rem" }}>
            //Contact
          </p>
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", lineHeight: 1.8, color: "rgba(228,224,215,0.7)", marginBottom: "1rem" }}>
            | 11, 13th Cross 5th main Srinidhi layout,<br />
            &nbsp;&nbsp;Konanakunte, Bangalore — 560062
          </p>
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", color: "rgba(228,224,215,0.7)", marginBottom: "0.75rem" }}>
            | +91-98842182133
          </p>
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", color: "rgba(228,224,215,0.7)" }}>
            | asrakhader@gmail.com
          </p>
        </div>

        {/* Connect — 30% */}
        <div style={{ width: "30%", flexShrink: 0 }}>
          <p style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "rgba(228,224,215,0.7)", marginBottom: "1.5rem" }}>
            //Connect
          </p>
          {["Instagram", "Facebook", "LinkedIn"].map((platform) => (
            <p key={platform} style={{ marginBottom: "0.75rem" }}>
              <a href="#" style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", color: "rgba(228,224,215,0.7)", textDecoration: "none" }}>
                | {platform}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Copyright — centered */}
      <div style={{ marginTop: "3rem", borderTop: "1px solid rgba(228,224,215,0.1)", paddingTop: "1.5rem", textAlign: "center" }}>
        <p style={{ fontFamily: K, fontWeight: 400, fontSize: "20px", color: "rgba(228,224,215,0.25)" }}>
          © {new Date().getFullYear()} AN ARC ABOVE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
