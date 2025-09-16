// client/src/components/IsPrivate/IsPrivate.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

export default function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) return null; // or a small spinner
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return children;
}
