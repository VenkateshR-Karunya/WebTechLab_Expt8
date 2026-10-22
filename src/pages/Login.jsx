import React, { useState } from "react";

// Responsive login page - the layout changes with CSS media queries (see App.css)
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please enter your email and password.");
    } else {
      setMessage("Welcome back, gardener! 🌻");
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-side">
        <div className="login-emoji">🌻</div>
        <h2>Welcome back</h2>
        <p>Log in to see your garden notes and plant plans.</p>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <span className="screen-badge"></span>

        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
        {message && <p className="success">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
