const LoginPage = () => {
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
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </section>

        <section className="login-hero">
          <form className="login-form">
            <input
              type="firstname"
              placeholder="First Name"
              className="login-form-item"
              id="firstname"
            />
            <input
              type="lastname"
              placeholder="Last Name"
              className="login-form-item"
              id="lastname"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="login-form-item"
              id="email"
            />
            <input
              type="password"
              placeholder="Password"
              className="login-form-item"
              id="password"
            />
            <button className="login-form-button">Claim your free trial</button>
          </form>
          <p>
            By clicking the button, you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </section>
      </main>
    </div>
  );
};
export default LoginPage;
