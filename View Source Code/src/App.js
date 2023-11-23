import React, { useEffect, useState } from "react";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const messageParam = urlParams.get("message");
  const statusParam = urlParams.get("status");
  const typeParam = urlParams.get("type");
  const userId = urlParams.get("id");

  const [message, setMessage] = useState(null);
  const [icon, setIcon] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //frontend url -  change it when deployed
  const url = `http://localhost:3000/login`;
  // const url = `${process.env.REACT_APP_URL}/login`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    const password = e.target[0].value;
    const confirmPassword = e.target[1].value;

    if (password !== confirmPassword) {
      window.alert("Passwords do not match. Please try again.");
      return;
    }

    // server url - change it when deployed
    const apiUrl = `http://localhost:8800/api-v1/users/reset-password`;
    // const apiUrl = `${process.env.REACT_APP_URL}/users/reset-password`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, password }),
      });

      if (response.ok) {
        window.alert("Password reset successful!");
        window.location.replace(url);
        setErrorMessage({
          status: "ok",
          msg: "Password reset successful!",
        });
      } else {
        setErrorMessage({
          status: "failed",
          msg: "Password reset failed. Please try again.",
        });
      }
    } catch (error) {
      setErrorMessage({
        status: "failed",
        msg: "An error occurred. Please try again later.",
      });
      console.log("An error occurred:", error);
    }
  };

  const EmailVerification = () => {
    return (
      <div className='card'>
        <div className='icon'>
          <span id='statusIcon'>{icon}</span>
        </div>
        <div
          id='statusMessage'
          className={statusParam === "success" ? `success` : "error"}
        >
          {message}
        </div>
        {statusParam === "success" && (
          <a href={url} id='btnLogin' className='showBtn'>
            Login
          </a>
        )}
      </div>
    );
  };

  const PasswordReset = () => {
    return (
      <div class='card'>
        <div class='title'>Password Reset</div>
        <form id='resetForm' onSubmit={handleSubmit}>
          <input
            type='password'
            className='input-field'
            id='password'
            placeholder='New Password'
            required
          />
          <input
            type='password'
            class='input-field'
            id='confirmPassword'
            placeholder='Confirm Password'
            required
          />
          {errorMessage?.status !== "ok" && (
            <button type='submit' id='btnSubmit' class='submit-button'>
              Submit
            </button>
          )}
        </form>
        {errorMessage?.status === "ok" && (
          <a href={url} id='btnLogin' className='showBtn'>
            Login
          </a>
        )}
        <div
          className={errorMessage?.status === "ok" ? `success` : "error"}
          id='statusMessage'
        >
          {errorMessage?.msg}
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!typeParam) {
      if (statusParam === "success") {
        setIcon("✔️");
        setMessage(messageParam);
      } else if (statusParam === "error") {
        setIcon("❌");
        setMessage(messageParam);
      } else {
        setIcon("❓");
        setMessage("Something went wrong. Try again");
      }
    } else {
    }
  }, [typeParam, messageParam, statusParam]);

  return (
    <div className='App'>
      {typeParam ? <PasswordReset /> : <EmailVerification />}
    </div>
  );
}

export default App;
