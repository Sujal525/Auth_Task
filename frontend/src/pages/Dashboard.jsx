import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CustomLogoutButton from "../components/CustomLogoutButton";

export default function Dashboard() {
  const { isAuthenticated, user, logout } = useAuth0();
  const [manualUser, setManualUser] = useState(null);

  // Load manual user safely from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("bt_user");
    if (storedUser) {
      try {
        setManualUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse manual user:", err);
      }
    }
  }, []);

  // Determine which user is active
  const displayName = isAuthenticated
    ? user?.name
    : manualUser?.name;

  const isManual = !isAuthenticated && manualUser;

  return (
    <div
      className="dashboard"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      {displayName ? (
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Welcome, <span className="accent">{displayName}</span> 👋
        </h1>
      ) : (
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Welcome to <span className="accent">BanasTech</span> 👋
        </h1>
      )}

      <p style={{ marginTop: "0.5rem", color: "#666" }}>
        Nice to see you. Your dashboard is ready.
      </p>

      {/* Show logout depending on login type */}
      {isAuthenticated && (
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          style={{
            marginTop: "1.5rem",
            padding: "0.6rem 1.2rem",
            backgroundColor: "#1d3557",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0b2545")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#1d3557")
          }
        >
          🔒 Logout
        </button>
      )}

      {isManual && <CustomLogoutButton />}
    </div>
  );
}
