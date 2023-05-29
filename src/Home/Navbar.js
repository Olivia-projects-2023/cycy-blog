import { Link } from "react-router-dom";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Navbar({ isAuth, setIsAuth }) {

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <div className="navbar">
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/createpost">CREATE Post</Link>
        {!isAuth ? (
          <Link to="/login">LOGIN</Link>
        ) : (
          <button onClick={signUserOut}>Log Out</button>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
