import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate, Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, error, isLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper">
      <section className="login-info">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <main>
        <section className="login-banner">
          <span>Welcome Back</span>
        </section>

        <section className="login-hero">
          <form className="login-form" onSubmit={handleSubmit}>
            {error && <p className="login-error">{error}</p>}
            <input
              type="email"
              placeholder="Email Address"
              className="login-form-item"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-form-item"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to={"/forgot-password"}>
              <p>Forgot password?</p>
            </Link>
            <button className="login-form-button">
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
                "Login"
              )}
            </button>
          </form>
          <p className="login-footer">
            Don't have an account?{" "}
            <Link to={"/signup"}>
              <span>Sign Up</span>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
};
export default LoginPage;
