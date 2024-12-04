import React from "react";
import satelitImg from "../../assets/satelite2.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-white text-black py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-green-800 border-b-green-800 p-10">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-green-800 uppercase"
              >
                nossa missão
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Eco Link
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                No Eco Link, acreditamos que cada pequena ação contribui para um grande impacto. Nossa missão é educar, conectar e inspirar pessoas a adotar práticas sustentáveis, promovendo um futuro mais verde e harmonioso para todos.
              </p>
              
              <a href="/sobre-nos" data-aos="fade-up"
                data-aos-delay="900"
                className="bg-green-800 text-white hover:bg-green-500 px-4 py-1 rounded-md duration-200">
                Ver tudo
              </a>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt="Sustentabilidade e preservação ambiental"
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
