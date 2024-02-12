import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      welcome {auth.user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
