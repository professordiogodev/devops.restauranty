// client/src/components/IsAnon/IsAnon.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

export default function IsAnon({ children }) {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) return null;
  if (isLoggedIn) return <Navigate to="/profile" replace />;

  return children;
}
