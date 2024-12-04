import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormCadastroProps {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const FormCadastro: React.FC<FormCadastroProps> = ({ error, setError }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (fullName && email && password) {
      navigate("/login");
    } else {
      setError("Por favor, preencha todos os campos");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      
      <div className="mb-4">
        <label className="text-white block mb-2" htmlFor="fullName">
          Nome Completo
        </label>
        <input
          type="text"
          id="fullName"
          className="w-full p-3 bg-white text-gray-700 rounded-md"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="text-white block mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 bg-white text-gray-700 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="text-white block mb-2" htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-3 bg-white text-gray-700 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="text-white block mb-2" htmlFor="confirmPassword">
          Confirmar Senha
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full p-3 bg-white text-gray-700 rounded-md"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Cadastrar
      </button>
    </form>
  );
};
export default FormCadastro;