import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { forgotPassword, isLoading, error, clearError } = useAuthStore();

  useEffect(() => {
    clearError();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="forgotpassword-wrapper">
      <section className="forgotpassword-info">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <main>
        <section className="forgotpassword-banner">
          <span>Forgot Password</span>
        </section>

        <section className="forgotpassword-hero">
          {!isSubmitted ? (
            <>
              <p className="forgotpassword-text">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
              <form className="forgotpassword-form" onSubmit={handleSubmit}>
                {error && <p className="forgotpassword-error">{error}</p>}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="forgotpassword-form-item"
                  value={email}
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="forgotpassword-form-button">
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
                      <span>Loading</span>
                    </>
                  ) : (
                    "Send Reset Link "
                  )}
                </button>
              </form>
            </>
          ) : (
            <p className="forgotpassword-text">
              If an account exists for {email}, you will receive a password
              reset link shortly.
            </p>
          )}
          <p className="forgotpassword-footer">
            <Link to={"/login"}>Back to Login</Link>
          </p>
        </section>
      </main>
    </div>
  );
};
export default ForgotPasswordPage;
