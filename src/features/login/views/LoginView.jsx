import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";

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
      <h1>ReactFilms</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginView;
