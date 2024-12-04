import React from "react";

import { FaTree, FaWater, FaMountain } from "react-icons/fa";

const ServiceData = [
  {
    title: "Florestas",
    content: "300-1500 hectares",
    description:
      "Essenciais para o equilíbrio ecológico, abrigam biodiversidade e ajudam a regular o clima.",
    icon: <FaTree className="text-7xl" />,
    aosDelay: "300",
    bgColor: "bg-green-700/60",
  },
  {
    title: "Oceanos",
    content: "500-1500 metros",
    description:
      "Cobrem mais de 70% da Terra, regulam o clima e fornecem oxigênio essencial para a vida.",
    icon: <FaWater className="text-7xl" />,
    aosDelay: "500",
    bgColor: "bg-green-700/60",
  },
  {
    title: "Montanhas",
    content: "300-1500 metros",
    description:
      "Fazem parte de ecossistemas únicos, sendo fontes de água e lar para diversas espécies.",
    icon: <FaMountain className="text-7xl" />,
    aosDelay: "700",
    bgColor: "bg-green-700/60",
  },
];

const HeroCard = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container">
          <div className="min-h-[400px]">
          <h3 data-aos="fade-up" className="text-2xl font-bold text-green-800 text-center pt-10" >Curiosidades:</h3>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 pt-10">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className={`min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 ${data.bgColor} backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto`}
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
