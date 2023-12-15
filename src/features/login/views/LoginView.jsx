import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";
import Logo from "../../../core/components/logo/logo";
import AppFooter from "../../../core/components/app_footer/app_footer";

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
    <div className="fondo">
      <Logo />
      <div
        style={{
          backgroundColor: "rgb(0,0,0,0.75)",
          borderRadius: "8px",
          margin: "auto",
          minHeight: "500px",
          padding: "40px 40px 40px 5px",
          width: "35%",
          marginBottom: "20px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "32px",
            }}
          >
            Inicia Sesión
          </h1>
          <input
            type="email"
            name="email"
            placeholder="Email o número de telefono..."
            style={{
              width: "70%",
              backgroundColor: "#333333",
              textAlign: "justify",
              padding: "12px 20px",
              margin: "  10px 80px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña..."
            style={{
              width: "70%",
              backgroundColor: "#333333",
              textAlign: "justify",
              padding: "12px 20px",
              margin: "  20px 80px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            style={{
              backgroundColor: "#e50914",
              display: "block",
              color: "white",
              padding: "12px 20px",
              width: "70%",
              margin: "  20px 80px",
              border: "none",
              borderRadius: "4px",
              cursor: " pointer",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            type="submit"
          >
            Iniciar Sesión
          </button>
          <div>
            <label>
              <input
                style={{
                  margin: "  20px 80px",
                  width: "10%",
                }}
                type="checkbox"
              />{" "}
              Recuerdame
            </label>
          </div>
        </form>
      </div>
      <AppFooter />
    </div>
  );
};

export default LoginView;
