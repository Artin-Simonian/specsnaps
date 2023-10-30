import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();
  return (
    <main className="AuthPage">
      <div className="AuthPageDIV">
        <h1>AuthPage</h1>
      {showSignUp ? (
        <SignUpForm setUser={setUser} navigate={navigate} />
      ) : (
        <LoginForm setUser={setUser} />
      )}

      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </button>
      </div>
      
    </main>
  );
}
