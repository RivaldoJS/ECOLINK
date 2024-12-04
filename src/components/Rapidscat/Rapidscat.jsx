import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-white text-black pb-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt="Sustentabilidade em foco"
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-green-800 border-b-green-800">
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-green-800 uppercase"
              >
                nossa missão
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="uppercase text-5xl"
              >
                Eco Link
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
                Nossa missão é preservar o meio ambiente, incentivar práticas sustentáveis e promover a conscientização sobre o impacto de nossas ações no planeta. Com o Eco Link, queremos conectar pessoas em uma jornada rumo a um futuro mais verde e sustentável.
              </p>
              <a 
                href="/sobre-nos" 
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-green-800 text-white hover:bg-green-500 px-4 py-1 rounded-md duration-200 mt-100"
                >
                Ver tudo
              </a>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
