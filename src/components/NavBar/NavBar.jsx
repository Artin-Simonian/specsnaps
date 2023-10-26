import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link className="route" to="/">
        Home
      </Link>
      &nbsp; &nbsp;
      <Link className="route" to="/Developer">
        Developer
      </Link>
      &nbsp; &nbsp;
      {user ? (
        <>
          {" "}
          <Link className="route" to="/posts">
            Post Pc
          </Link>
          &nbsp; &nbsp;
          <span>Welcome, {user.name}</span>
          &nbsp; &nbsp;
          <Link className="route" to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </>
      ) : (
        <Link className="route" to="/login">
          Member
        </Link>
      )}
    </nav>
  );
}
