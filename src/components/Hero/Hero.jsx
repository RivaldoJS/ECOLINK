import React from "react";

const Hero = () => {
  return (
    <div className=" bg-black/75 h-[500px]">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              Eco Link
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            Conectando pessoas e iniciativas para um mundo mais sustentável. Nosso objetivo é transformar atitudes simples em grandes impactos, promovendo a conscientização ambiental, incentivando o descarte correto de resíduos e premiando quem faz a diferença.
            </p>
            <a href="/sobre-nos" data-aos="fade-up" data-aos-delay="500" className="bg-green-400 text-white hover:bg-green-500 px-4 py-1 rounded-md duration-200 inline-block">
              VEJA MAIS
            </a>

          </div>
          <div></div>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;
