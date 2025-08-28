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

  const displayName = isAuthenticated ? user?.name : manualUser?.name;
  const isManual = !isAuthenticated && manualUser;

  return (
    <div className="container">
      <div className="card" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          {displayName ? (
            <>
              Welcome, <span className="accent">{displayName}</span> 👋
            </>
          ) : (
            <>
              Welcome to <span className="accent">BanasTech</span> 👋
            </>
          )}
        </h1>

        <p className="small-muted" style={{ marginBottom: "1.5rem" }}>
          We're glad to have you here. Explore your secure dashboard and manage
          authentication seamlessly.
        </p>

        {/* Appreciation Card */}
        <div className="status-card" style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>
            🚀 BanasTech Internship Motto
          </h3>
          <p className="small-muted">
            At <span className="accent">BanasTech</span>, innovation meets
            opportunity. This internship program is not just about coding but
            about building real-world, production-ready applications. We
            appreciate your dedication and effort in contributing to modern
            authentication solutions.
          </p>
        </div>

        {/* Logout */}
        {isAuthenticated && (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="btn-primary"
          >
            🔒 Logout
          </button>
        )}
        {isManual && <CustomLogoutButton />}
      </div>
    </div>
  );
}
