import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate, Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const SignUpPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { signup, error, isLoading, clearError } = useAuthStore();

  useEffect(() => {
    clearError();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!firstname) {
      console.log("First Name cannot be empty");
      errors.firstname = "First Name cannot be empty";
    }
    if (!lastname) {
      console.log("Last Name cannot be empty");
      errors.lastname = "Last Name cannot be empty";
    }
    if (!email) {
      console.log("Looks like this is not an email");
      errors.email = "Looks like this is not an email";
    }
    if (!password) {
      console.log("Password cannot be empty");
      errors.password = "Password cannot be empty";
    }
    if (Object.keys(errors).length > 0) {
      setLocalError(errors);
      return;
    }
    try {
      setLocalError({ firstname: "", lastname: "", email: "", password: "" });
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
            {error && <p className="signup-form-error">{error}</p>}
            <input
              type="firstname"
              placeholder={
                localError.firstname && !firstname ? "" : "First Name"
              }
              className={
                localError.firstname && !firstname
                  ? "signup-form-item-icon"
                  : "signup-form-item"
              }
              value={firstname}
              id="firstname"
              onChange={(e) => {
                setFirstname(e.target.value);
                if (error) clearError();
                setLocalError((prev) => ({ ...prev, firstname: "" }));
              }}
            />
            {localError.firstname && (
              <p className="signup-error">{localError.firstname}</p>
            )}
            <input
              type="lastname"
              placeholder={localError.lastname && !lastname ? "" : "Last Name"}
              className={
                localError.lastname && !lastname
                  ? "signup-form-item-icon"
                  : "signup-form-item"
              }
              value={lastname}
              id="lastname"
              onChange={(e) => {
                setLastname(e.target.value);
                setLocalError((prev) => ({ ...prev, lastname: "" }));
              }}
            />
            {localError.lastname && (
              <p className="signup-error">{localError.lastname}</p>
            )}
            <input
              type="email"
              placeholder={
                localError.email && !email
                  ? "email@example/com"
                  : "Email Address"
              }
              className={
                localError.email && !email
                  ? "signup-form-item-icon"
                  : "signup-form-item"
              }
              value={email}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setLocalError((prev) => ({ ...prev, email: "" }));
              }}
            />
            {localError.email && (
              <p className="signup-error">{localError.email}</p>
            )}
            <input
              type="password"
              placeholder={localError.password && !password ? "" : "Password"}
              className={
                localError.password && !password
                  ? "signup-form-item-icon"
                  : "signup-form-item"
              }
              value={password}
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setLocalError((prev) => ({ ...prev, password: "" }));
              }}
            />
            {localError.password && (
              <p className="signup-error">{localError.password}</p>
            )}
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
            <br></br>
            By clicking the button, you are agreeing to our
            <span> Terms and Services</span>
          </p>
        </section>
      </main>
    </div>
  );
};
export default SignUpPage;
