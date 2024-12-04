import React from "react";
import { Link } from "react-router-dom"; // Link para redirecionar para a home ou outras páginas

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-xl text-gray-700 mb-4">Página não encontrada</p>
        <p className="text-lg text-gray-500">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
