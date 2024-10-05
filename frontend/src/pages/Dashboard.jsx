import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { formatDate } from "../../utils/date";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const { user, isLoading, error, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      <section className="dashboard-info">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <main>
        <section className="dashboard-banner">
          <span>Dashboard</span>
        </section>

        <section className="dashboard-hero">
          <div className="dashboard-cardwrapper">
            {error && <p className="dashboard-error">{error}</p>}
            <div className="dashboard-card">
              <h2>Profile Information</h2>

              <p>
                <span>Name: </span>
                {user.firstname} {user.lastname}
              </p>
              <p>
                <span>Email: </span>
                {user.email}
              </p>
            </div>
            <div className="dashboard-card">
              <h2>Account Activity</h2>
              <p>
                <span>Joined:</span> {formatDate(user.createdAt)}
              </p>
              <p>
                <span>Last login: </span>
                {formatDate(user.lastLogin)}
              </p>
            </div>
            <button className="dashboard-button" onClick={handleLogout}>
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
                "Logout"
              )}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Dashboard;
