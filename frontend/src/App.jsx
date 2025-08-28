import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import UsersList from "./pages/UsersList";
import AuthButtons from "./components/AuthButtons";
import CustomLogoutButton from "./components/CustomLogoutButton";

export default function App() {
  const [manualToken, setManualToken] = useState(localStorage.getItem("bt_token"));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onStorage = () => setManualToken(localStorage.getItem("bt_token"));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthenticated) {
       navigate("/dashboard", { replace: true });
      }
    }, [isAuthenticated, navigate]);

  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <div className="app-root">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-wrap">
            <Link to="/" className="brand">BanasTech</Link>
            <div className="brand-sub">Authentication Demo</div>
          </div>

          <nav className={`navlinks ${mobileOpen ? "open" : ""}`} aria-label="Main navigation">
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)}>Signup</Link>
            <Link to="/login" onClick={() => setMobileOpen(false)}>Login</Link>
            <Link to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            <Link to="/users" onClick={() => setMobileOpen(false)}>Users</Link>

            <div className="nav-actions">
              <AuthButtons />
              {manualToken && <CustomLogoutButton />}
            </div>
          </nav>

          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={toggleMobile}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="brand">BanasTech</div>
            <div className="small-muted">Built for internship demo • Secure auth system</div>
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/users">Users</a>
            <a href="/dashboard">Dashboard</a>
          </div>

          <div className="small-muted">© {new Date().getFullYear()} BanasTech</div>
        </div>
      </footer>
    </div>
  );
}
