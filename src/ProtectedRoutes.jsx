import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Login status ko check karo

  if (!isLoggedIn) {
    // Agar login nahi hai to user ko Login page pe redirect karo
    return <Navigate to="/login" />;
  }

  return children; // Agar login ho chuka hai to component render karo
}

export default ProtectedRoute;
