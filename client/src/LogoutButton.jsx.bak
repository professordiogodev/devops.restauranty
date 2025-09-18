import { useContext } from "react";
// IMPORTANT: stay inside src/, so use "./", not "../"
import { AuthContext } from "./context/auth.context";

export default function LogoutButton({ className = "" }) {
  const { logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    try {
      // clear token & user
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      // call context handler if it exists
      if (typeof logOutUser === "function") logOutUser();
    } finally {
      // hard redirect so all state is clean
      window.location.replace("/login");
    }
  };

  return (
    <button className={className} onClick={handleLogout}>
      Exit
    </button>
  );
}
