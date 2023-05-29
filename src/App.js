import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Home/Login";
import Create from "./Home/Create";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(false);


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };


  return (
    <Router>
    <div className="navbar">
      <nav>
        <Link to="/">HOME</Link>
        
        {!isAuth ? (
          <Link to="/login">LOGIN</Link>
        ) : (
          <>
          <Link to="/createpost">CREATE Post</Link>
          <button onClick={signUserOut}>Log Out</button>
          </>
         
        )}
      </nav>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<Create isAuth={isAuth}/>} />
        <Route path="/login" element={<Login  setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
