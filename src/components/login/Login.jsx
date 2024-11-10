import { useState } from "react";
import loginStyle from "../login/login.module.css";

export const Login = () => {
  const [inputValue, setInputValue] = useState(""); // Username input
  const [passwordValue, setPasswordValue] = useState(""); // Password input
  const [userName, setUserName] = useState(""); // Store validated username
  const [isValidUser, setIsValidUser] = useState(false); // Track username validity
  const [isValidPassword, setIsValidPassword] = useState(false); // Track password validity
  const [congratulationsMessage, setCongratulationsMessage] = useState(""); // Track congrats message
  const [passwordVisible, setPasswordVisible] = useState(false); // Track password visibility state

  // Update username value as the user types
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // Update password value as the user types
  const getPasswordValue = (e) => {
    setPasswordValue(e.target.value);
  };

  // Prevent the default form submission behavior
  const formPrevent = (e) => {
    e.preventDefault();
  };

  // Toggle password visibility when eye icon is clicked
  const isPasswordVisible = () => {
    setPasswordVisible((prevState) => !prevState); // Toggle password visibility state
  };

  // Handle login button click to validate username and password
  const checkValidation = () => {
    // Reset congratulatory message each time the login button is clicked
    setCongratulationsMessage("");

    // Validate username
    if (inputValue === "samir") {
      setUserName(inputValue); // Set validated username
      setIsValidUser(true); // Mark username as valid
    } else {
      setIsValidUser(false); // Mark as invalid if the username doesn't match
    }

    // Validate password
    if (passwordValue === "samir1234") {
      setIsValidPassword(true); // Mark password as valid
    } else {
      setIsValidPassword(false); // Mark password as invalid
    }

    // If both username and password are correct, show congratulatory message
    if (inputValue === "samir" && passwordValue === "samir1234") {
      setCongratulationsMessage(
        "Congratulations! You are successfully logged in."
      );
    }
  };

  return (
    <>
      <div className={`${loginStyle.wrapper}`}>
        <form onSubmit={formPrevent}>
          <h1>Login</h1>
          <div className={`${loginStyle.inputBox}`}>
            <input
              type="text"
              placeholder="Username"
              required=""
              value={inputValue}
              onChange={getInputValue}
            />
            <img
              className={`${loginStyle.inputIcn}`}
              src="/images/user.png"
              alt="User icon"
            />
          </div>
          <div className={`${loginStyle.inputBox}`}>
            <input
              type={passwordVisible ? "text" : "password"} // Change input type based on password visibility
              placeholder="Password"
              required=""
              autoComplete="false"
              value={passwordValue}
              onChange={getPasswordValue}
            />
            <img
              className={`${loginStyle.inputIcn}`}
              src="/images/eye.png"
              alt="Password icon"
              onClick={isPasswordVisible} // Toggle visibility on click
            />
          </div>
          <div className={`${loginStyle.rememberForget}`} />
          <br />
          <button
            type="button" // Change to type="button" to prevent form submission
            className={`${loginStyle.btn}`}
            onClick={checkValidation} // Validate on button click
          >
            Login
          </button>
          <div className={`${loginStyle.registerLink}`}>
            <a href="#">Forget password?</a>
          </div>
          <div className={`${loginStyle.registerLink}`}>
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>

        {/* Conditionally render the congratulation message if both username and password are valid */}
        {congratulationsMessage && (
          <h3 className={`${loginStyle.congratulationsMessage}`}>
            <img src="/images/applause.png" alt="" />
            {congratulationsMessage}
          </h3>
        )}
      </div>
    </>
  );
};
