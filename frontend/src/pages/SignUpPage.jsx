import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate, Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const SignUpPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signup, error, isLoading, clearError } = useAuthStore();

  useEffect(() => {
    clearError();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(firstname, lastname, email, password);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signup-wrapper">
      <section className="signup-info">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <main>
        <section className="signup-banner">
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </section>

        <section className="signup-hero">
          <form className="signup-form" onSubmit={handleSubmit}>
            {error && <p className="signup-error">{error}</p>}
            <input
              type="firstname"
              placeholder="First Name"
              className="signup-form-item"
              value={firstname}
              id="firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="lastname"
              placeholder="Last Name"
              className="signup-form-item"
              value={lastname}
              id="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="signup-form-item"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="signup-form-item"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="signup-form-button"
              type="submit"
              disabled={isLoading}
            >
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
                "Claim your free trial"
              )}
            </button>
          </form>
          <p className="signup-footer">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span>Login</span>
            </Link>
          </p>
          <p className="signup-footer">
            By clicking the button, you are agreeing to our
            <span> Terms and Services</span>
          </p>
        </section>
      </main>
    </div>
  );
};
export default SignUpPage;
