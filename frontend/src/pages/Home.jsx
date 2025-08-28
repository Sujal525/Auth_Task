export default function Home() {
  return (
    <div
      className="home"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        background: "linear-gradient(135deg, #f0f4ff, #ffffff)",
        padding: "2rem",
      }}
    >
      <div
        className="hero-card"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          background: "#fff",
          padding: "3rem",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          maxWidth: "1100px",
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* Left Section */}
        <div className="hero-left">
          <h1
            className="title"
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "1rem",
            }}
          >
            Authentication Made Simple for{" "}
            <span className="accent" style={{ color: "#007bff" }}>
              BanasTech
            </span>
          </h1>
          <p
            className="small-muted"
            style={{
              fontSize: "1.1rem",
              color: "#555",
              marginBottom: "2rem",
              maxWidth: "90%",
            }}
          >
            Seamlessly switch between manual authentication and Google Auth0 login.
            Store users securely in MongoDB Atlas with production-ready practices.
          </p>

          <button
            style={{
              padding: "0.9rem 1.8rem",
              background: "#007bff",
              border: "none",
              color: "#fff",
              borderRadius: "0.7rem",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,123,255,0.25)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#0056b3")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "#007bff")
            }
          >
            Get Started 🚀
          </button>
        </div>

        {/* Right Section - Features */}
        <div
          className="hero-right"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          <div
            className="feature"
            style={{
              background: "#f8faff",
              padding: "1.5rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ marginBottom: "0.5rem" }}>⚡ Fast Setup</h4>
            <p className="small-muted" style={{ color: "#666" }}>
              Built with Vite + React, Node.js, and MongoDB Atlas. Start in
              minutes.
            </p>
          </div>

          <div
            className="feature"
            style={{
              background: "#f8faff",
              padding: "1.5rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ marginBottom: "0.5rem" }}>🔒 Secure</h4>
            <p className="small-muted" style={{ color: "#666" }}>
              Password hashing, JWT for manual auth, and Auth0 social login.
            </p>
          </div>

          <div
            className="feature"
            style={{
              background: "#f8faff",
              padding: "1.5rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ marginBottom: "0.5rem" }}>🌍 Scalable</h4>
            <p className="small-muted" style={{ color: "#666" }}>
              Designed to scale with modern cloud hosting like Vercel & Render.
            </p>
          </div>

          <div
            className="feature"
            style={{
              background: "#f8faff",
              padding: "1.5rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ marginBottom: "0.5rem" }}>⚙️ Developer-Friendly</h4>
            <p className="small-muted" style={{ color: "#666" }}>
              Clean codebase, production-ready authentication, and easy to
              extend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
