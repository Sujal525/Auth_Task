import { useNavigate } from "react-router-dom";

export default function CustomLogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("bt_token");
    localStorage.removeItem("bt_user");
    // trigger storage event for other tabs (optional)
    try {
      window.dispatchEvent(new Event("storage"));
    } catch {}
    navigate("/login");
  };

  return (
    <button className="btn-danger small" onClick={handleLogout}>
      Logout (Manual)
    </button>
  );
}
