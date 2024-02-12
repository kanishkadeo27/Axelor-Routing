import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    if (user === "admin" && password === "admin") {
      auth.login(user);
      //replace is used to fix the issue of going back even after logged in
      navigate(redirectPath, { replace: true });
    } else {
      alert("wrong credentials");
    }
  };
  return (
    <div className="Login_form">
      <label htmlFor="user">
        Username:
        <input type="text" id="user" onChange={(e) => setUser(e.target.value)} />
      </label>
      <label htmlFor="pass">
        Password:
        <input type="text"id="pass" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
