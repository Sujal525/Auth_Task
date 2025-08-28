import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState(null);
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    try {
      const res = await axios.post(`${API}/api/auth/login`, form);
      const token = res.data.token;
      localStorage.setItem("bt_token", token);
      localStorage.setItem("bt_user", JSON.stringify(res.data.user || {}));
      setMsg({ type: "success", text: "Login successful! Redirecting..." });
      setTimeout(() => navigate("/dashboard"), 900);
    } catch (err) {
      setMsg({ type: "error", text: err.response?.data?.message || "Login failed" });
    }
  };

  return (
    <div className="auth-container">
      <div className="card form-card">
        <h2 className="title">Login — BanasTech</h2>
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button className="btn-primary" type="submit">Login</button>
        </form>
        {msg && <div className={`msg ${msg.type}`}>{msg.text}</div>}
      </div>
    </div>
  );
}
