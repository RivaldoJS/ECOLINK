import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Descartar from "./pages/Descartar";
import SobreNos from "./pages/SobreNos";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import NotFound from "./pages/404";

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <Navbar />

     
   
        // Espaço vazio de 80px em páginas que não sejam "/"
        <div className="h-[80px]" />
      )}

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/descartar" element={<Descartar />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />

        {/* Página 404 para rotas não encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;