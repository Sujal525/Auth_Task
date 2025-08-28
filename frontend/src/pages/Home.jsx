import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 2rem",
          textAlign: "center",
          minHeight: "80vh",
          background: "linear-gradient(135deg, #f9fafb, #eef2f7)",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "#1a202c",
          }}
        >
          Welcome to <span style={{ color: "#2563eb" }}>BanasTech</span> 🚀
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto",
            color: "#4a5568",
          }}
        >
          A secure and modern authentication system built for your apps.  
          Sign up in seconds, log in with confidence, and start managing your account today.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Link
            to="/signup"
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1.1rem",
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              textDecoration: "none",
              marginRight: "1rem",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#1e40af")}
            onMouseOut={(e) => (e.target.style.background = "#2563eb")}
          >
            Get Started
          </Link>
          <Link
            to="/login"
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1.1rem",
              borderRadius: "8px",
              background: "#e5e7eb",
              color: "#1a202c",
              textDecoration: "none",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#cbd5e1")}
            onMouseOut={(e) => (e.target.style.background = "#e5e7eb")}
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          padding: "3rem 2rem",
          background: "#fff",
        }}
      >
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
            🔐 Secure Auth
          </h3>
          <p style={{ color: "#4a5568" }}>
            Built with modern standards (JWT, OAuth) for maximum security.
          </p>
        </div>
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
            ⚡ Fast & Reliable
          </h3>
          <p style={{ color: "#4a5568" }}>
            Optimized backend on Render + frontend on Vercel for blazing speed.
          </p>
        </div>
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
            🌍 Cloud Ready
          </h3>
          <p style={{ color: "#4a5568" }}>
            Powered by MongoDB Atlas so your data stays always available.
          </p>
        </div>
      </section>
    </div>
  );
}
