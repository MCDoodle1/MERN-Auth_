import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import { Link, useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState("");
  const [successMessage, setSuccesMessage] = useState("");
  const { resetPassword, isLoading, error, clearError } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLocalError("");
    setSuccesMessage("");
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }
    try {
      await resetPassword(token, password);
      setSuccesMessage(
        "Passwords reset successfully, redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="resetpassword-wrapper">
      <section className="resetpassword-info">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <main>
        <section className="resetpassword-banner">
          <span>Reset Password</span>
        </section>

        <section className="resetpassword-hero">
          <>
            <form className="resetpassword-form" onSubmit={handleSubmit}>
              {localError && (
                <p className="resetpassword-error">{localError}</p>
              )}
              {successMessage && (
                <p className="resetpassword-error">{successMessage}</p>
              )}
              <input
                type="password"
                placeholder="New Password"
                className="resetpassword-form-item"
                value={password}
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) clearError();
                  setLocalError("");
                }}
                required
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="resetpassword-form-item"
                value={confirmPassword}
                id="confirmedpassword"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (error) clearError();
                  setLocalError("");
                }}
                required
              />
              <button className="resetpassword-form-button">
                {isLoading ? (
                  <>
                    <Spinner
                      width={30}
                      height={30}
                      colors={[
                        "#2404f6",
                        "#3a4ec2",
                        "#4d8e9a",
                        "#41b292",
                        "#3dbf8f",
                        "#05f673",
                      ]}
                    />{" "}
                    <span>Resetting...</span>
                  </>
                ) : (
                  "Set New Password"
                )}
              </button>
            </form>
          </>
          <p className="resetpassword-footer">
            <Link to={"/login"}>Back to Login</Link>
          </p>
        </section>
      </main>
    </div>
  );
};
export default ResetPasswordPage;
