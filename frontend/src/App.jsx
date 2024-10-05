import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import SignUpPage from "./pages/SignUpPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import Spinner from "./components/Spinner";

// Protect routes that require authentification
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isCheckingAuth, user } = useAuthStore();
  if (isCheckingAuth) {
    return (
      <Spinner
        height={100}
        width={100}
        colors={[
          "#2404f6",
          "#3a4ec2",
          "#4d8e9a",
          "#41b292",
          "#3dbf8f",
          "#05f673",
        ]}
      />
    );
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

// Redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const { checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <RedirectAuthenticatedUser>
            <LoginPage />
          </RedirectAuthenticatedUser>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <RedirectAuthenticatedUser>
            <SignUpPage />
          </RedirectAuthenticatedUser>
        }
      ></Route>
      <Route path="/verify-email" element={<VerifyEmailPage />}></Route>
      <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
      <Route
        path="/reset-password/:token"
        element={<ResetPasswordPage />}
      ></Route>
    </Routes>
  );
}

export default App;
