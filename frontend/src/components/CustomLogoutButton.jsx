import { useNavigate } from "react-router-dom";

export default function CustomLogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear stored auth data
    localStorage.removeItem("bt_token");
    localStorage.removeItem("bt_user");

    // Notify other tabs (optional)
    try {
      window.dispatchEvent(new Event("storage"));
    } catch (err) {
      console.warn("Storage event dispatch failed:", err);
    }

    // Redirect to login
    navigate("/login", { replace: true });
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        marginTop: "1.5rem",
        padding: "0.6rem 1.2rem",
        backgroundColor: "#e63946",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "background 0.2s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d62828")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e63946")}
    >
      🔓 Logout
    </button>
  );
}
