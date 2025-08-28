import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersList() {
  const [data, setData] = useState({ custom: [], auth0: [] });
  const [loading, setLoading] = useState(true);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${API}/api/users`);
        setData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <div className="users-page">
      <div className="card">
        <h2 className="title">All Users</h2>
        {loading ? <p>Loading...</p> : (
          <div className="users-grid">
            <div>
              <h3>Custom Users</h3>
              {data.custom.length === 0 ? <p className="small-muted">No custom users yet</p> : (
                <div className="list">
                  {data.custom.map(u => (
                    <div key={u._id} className="list-item">
                      <div className="user-info">
                        <strong>{u.name}</strong>
                        <div className="small-muted">{u.email}</div>
                      </div>
                      <div className="small-muted">{new Date(u.createdAt).toLocaleDateString()}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h3>Auth0 Users</h3>
              {data.auth0.length === 0 ? <p className="small-muted">No Auth0 users yet</p> : (
                <div className="list">
                  {data.auth0.map(u => (
                    <div key={u._id} className="list-item auth">
                      {u.picture && <img src={u.picture} alt="avatar" />}
                      <div className="user-info">
                        <strong>{u.name}</strong>
                        <div className="small-muted">{u.email}</div>
                        <div className="small-muted">Sub: {u.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
