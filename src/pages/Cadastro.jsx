import React, { useState } from "react";
import FormCadastro from "../components/FormCadastro/FormCadastro";
import BgImage from "../assets/background.png";

const Cadastro = () => {
  const [error, setError] = useState("");

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-black/50 p-8 rounded-lg w-full sm:w-96">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">Cadastro</h2>

        <FormCadastro error={error} setError={setError} />

        <div className="mt-4 text-center">
          <p className="text-white">
            Já tem uma conta? <a href="/login" className="text-blue-400">Faça login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;