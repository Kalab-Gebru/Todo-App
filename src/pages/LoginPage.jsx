import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function LoginPage() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingAcount, setCreatingAcount] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });
  }, []);

  async function SignInFun() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      alert(err);
    }
  }

  async function SignUpFun() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      alert(err);
    }
  }

  async function SignInWithGoogleFun() {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      alert(err);
    }
  }

  async function LogOutFun() {
    try {
      await signOut(auth);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center dark:text-white w-full min-h-screen dark:bg-Dark-Very-Dark-Blue">
      <div className="flex w-96 items-center justify-between bg-gray-300 p-4 rounded dark:bg-Dark-Very-Dark-Desaturated-Blue">
        <h1 className="text-4xl font-bold">TODO APP</h1>
        <button className="" onClick={toggleTheme}>
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="flex flex-col w-96 border shadow-lg rounded-lg p-6 m-4 dark:bg-Dark-Very-Dark-Desaturated-Blue">
        {creatingAcount && (
          <h2 className="text-xl font-bold text-gray-400 pb-6">
            Creating Acount
          </h2>
        )}
        <label className="text-xl font-bold mb-2" htmlFor="name">
          Email:
        </label>
        <input
          className="rounded h-12 px-4 mb-4 border"
          placeholder="example@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="name"
        />
        <label className="text-xl font-bold mb-2" htmlFor="password">
          password:
        </label>
        <input
          className="rounded h-12 px-4 mb-4 border"
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <div className="flex justify-end items-baseline space-x-4 w-full">
          {creatingAcount ? (
            <button
              onClick={SignUpFun}
              className="bg-green-300 text-white h-12 w-32 rounded uppercase"
            >
              Sign UP
            </button>
          ) : (
            <button
              onClick={SignInFun}
              className="bg-green-300 text-white h-12 w-32 rounded uppercase"
            >
              Sign In
            </button>
          )}
        </div>
        <button
          onClick={SignInWithGoogleFun}
          className="rounded border w-full h-12 mt-8"
        >
          SignIn With Google
        </button>
        <button
          onClick={() => {
            setCreatingAcount((pre) => !pre);
          }}
          className="rounded border w-full h-12 mt-8 bg-blue-400 text-white"
        >
          {creatingAcount ? "Already have Acount? Sign in." : "Create Account"}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
