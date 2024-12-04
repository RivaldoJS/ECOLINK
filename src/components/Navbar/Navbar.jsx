import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 right-0 w-full z-50 bg-black/90 backdrop-blur-sm py-4 sm:py-0"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="Logo Eco Link" className="w-20" />
              <span>ECO LINK</span>
            </div>
          </Link>

          {/* Menu para telas maiores */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-6 text-xl text-white">
              <li>
                <Link to="/descartar">Descartar</Link>
              </li>
              <li>
                <Link to="/sobre-nos">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/cadastro">Cadastro</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>

          {/* Botão de menu hamburguer para telas menores */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Menu dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 text-white rounded-lg shadow-lg">
            <ul className="flex flex-col items-start gap-4 p-4">
              <li>
                <Link to="/descartar" onClick={toggleMenu}>
                  Descartar
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" onClick={toggleMenu}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/cadastro" onClick={toggleMenu}>
                  Cadastro
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={toggleMenu}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
