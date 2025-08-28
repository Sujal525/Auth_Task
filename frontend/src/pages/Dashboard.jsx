import { useAuth0 } from "@auth0/auth0-react";

export default function Dashboard() {
  const { isAuthenticated, user } = useAuth0();
  const token = localStorage.getItem("bt_token");
  const manualUser = JSON.parse(localStorage.getItem("bt_user") || "null");

  return (
    <div className="dashboard">
      <div className="card">
        <div className="dashboard-hero">
          <div>
            <h2 className="title">Welcome back to <span className="accent">BanasTech</span> 👋</h2>
            <p className="small-muted">Nice to see you. This dashboard shows authentication status and users overview.</p>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">Auth</div>
              <div className="stat-label">Secure</div>
            </div>
            <div className="stat">
              <div className="stat-value">Users</div>
              <div className="stat-label">Manage</div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="status-card">
            <h3>Manual Authentication</h3>
            {token ? (
              <>
                <p className="success">✔ Logged in with manual credentials</p>
                {manualUser && <div className="small-muted">Hello, <strong>{manualUser.name}</strong></div>}
              </>
            ) : (
              <p className="error">✖ Not logged in</p>
            )}
          </div>

          <div className="status-card">
            <h3>Google (Auth0)</h3>
            {isAuthenticated ? (
              <div className="user-box">
                {user?.picture && <img src={user.picture} alt="avatar" />}
                <div>
                  <strong>{user.name}</strong>
                  <p className="small-muted">{user.email}</p>
                </div>
              </div>
            ) : (
              <p className="error">✖ Not logged in</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
