import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <section className="max-w-[1200px] mx-auto text-white py-8">
        <div className="flex justify-between gap-6">
          {/* Primeiro bloco */}
          <div className="px-4">
            <h1 className="text-2xl font-bold mb-3">Eco Link</h1>
            <p className="text-gray-400">
              Conectando você a um futuro sustentável.
            </p>
          </div>
          {/* Segundo bloco */}
          <div className="px-4">
            <h1 className="text-xl font-bold mb-3">Contato</h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <HiLocationMarker/>
                <p>Salvador, Bahia</p>
              </div>
              <div className="flex items-center gap-3">
                <MdMessage />
                <p>rivaldo@ba.estudante.senai.br</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          © 2024 Eco Link. Todos os direitos reservados.
        </div>
      </section>
    </div>
  );
};

export default Footer;