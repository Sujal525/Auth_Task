import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState(null);
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    try {
      const res = await axios.post(`${API}/api/auth/signup`, form);
      setMsg({ type: "success", text: res.data.message || "Registered successfully!" });
      setTimeout(() => navigate("/login"), 900);
    } catch (err) {
      setMsg({ type: "error", text: err.response?.data?.message || "Signup failed" });
    }
  };

  return (
    <div className="auth-container">
      <div className="card form-card">
        <h2 className="title">Create an account — BanasTech</h2>
        <p className="small-muted">Signup with email & password, or use Google login in the header.</p>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button className="btn-primary" type="submit">Sign up</button>
        </form>
        {msg && <div className={`msg ${msg.type}`}>{msg.text}</div>}
      </div>
    </div>
  );
}
