import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
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
