export default function Home() {
  return (
    <div className="home">
      <div className="card hero-card">
        <div className="hero-left">
          <h1 className="title">Secure Authentication for <span className="accent">BanasTech</span></h1>
          <p className="small-muted">
            Choose manual signup/login or use Google (Auth0). Both user types are saved to MongoDB Atlas. Clean, secure, and production-ready.
          </p>
        </div>
        <div className="hero-right">
          <div className="feature">
            <h4>Fast Setup</h4>
            <p className="small-muted">Vite + React and Node.js backend with MongoDB Atlas.</p>
          </div>
          <div className="feature">
            <h4>Secure</h4>
            <p className="small-muted">Password hashed, JWT for manual auth, Auth0 for social login.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
