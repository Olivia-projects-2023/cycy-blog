import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="login-page">
      <p>Sign In with Google to Continue</p>
      <button className="button-54" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
}

export default Login;
