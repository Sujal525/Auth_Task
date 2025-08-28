import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthButtons() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const saveAuth0User = async () => {
      if (!isAuthenticated || !user) return;
      try {
        await axios.post(`${API}/api/auth0/save`, {
          sub: user.sub,
          name: user.name,
          email: user.email,
        });
        navigate("/dashboard"); // auto redirect after Google login
      } catch (err) {
        console.error("Failed to save Auth0 user:", err?.response?.data || err.message);
      }
    };
    saveAuth0User();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, user]);

  if (isLoading) return null;

  return (
    <div className="auth-buttons">
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithRedirect()}
          className="btn-outline small"
        >
          Login with Google
        </button>
      ) : (
        <div className="auth-logged">
          <span className="user-name">{user?.name || user?.email}</span>
          <button
            onClick={() =>
  logout({
    returnTo: window.location.origin.includes("localhost")
      ? "http://localhost:5173"
      : "https://auth-task-lime.vercel.app/"
  })
}
            className="btn-danger small"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
