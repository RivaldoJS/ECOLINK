import React, { useState } from "react";
import FormLogin from "../components/FormLogin/FormLogin"; 
import BgImage from "../assets/background.png";

const Login = () => {
  const [error, setError] = useState("");

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-black/50 p-8 rounded-lg w-full sm:w-96">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">Login</h2>

        <FormLogin error={error} setError={setError} />

        <div className="mt-4 text-center">
          <p className="text-white">
            Não tem uma conta? <a href="/cadastro" className="text-blue-400">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
