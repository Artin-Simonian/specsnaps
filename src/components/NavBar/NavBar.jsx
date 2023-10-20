import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp; 
      <Link to="/posts">Post Pc</Link>
      &nbsp; | &nbsp;
      {user ? (
        <>
          {" "}
          <span>Welcome, {user.name}</span>
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </>
      ) : (
        <Link to="/login">LogIn</Link>
      )}
    </nav>
  );
}
