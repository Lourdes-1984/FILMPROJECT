import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";
import Logo from "../../../core/components/logo/logo";

const LoginView = () => {
  const { login, isLoggedIn } = useAuth();
  // console.log(isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData);

    //const {email, password} = Object.fromEntries(new FormData(e.target));
    console.log(email, password);
    //console.log(Object.fromEntries(formData));
    //console.log(formData.get("email"), formData.get("password"));

    login(email, password);
  };

  return (
    <div
      style={{
        backgroundImage: "url(./assets/fondo.jpg)",
      }}
      className="fondo"
    >
      <Logo />
      <div
        style={{
          backgroundColor: "rgb(0,0,0,0.75)",
          borderRadius: "8px",
          boxSizing: "borderBox",
          display: "flex",
          flexdirection: "column",
          margin: "auto",
          minHeight: "515px",
          padding: "20px 0 30PX",
          width: "35%",
          height: "50%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Inicia Sesión
          </h2>
          <input
            type="email"
            name="email"
            style={{
              width: "50%",
              textAlign: "center",
              padding: "12px 20px",
              margin: "0 auto 10px 110px",
              backgroundColor: "#FFF",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          <input
            type="password"
            name="password"
            style={{
              width: "50%",
              padding: "12px 20px",
              margin: "0 auto 10px 110px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          <button
            style={{
              backgroundColor: "#e50914",
              display: "block",
              color: "white",
              padding: "12px 20px",
              width: "50%",
              margin: "auto",
              border: "none",
              borderRadius: "4px",
              cursor: " pointer",
            }}
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
