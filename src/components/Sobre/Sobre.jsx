import React from "react";

const Sobre = () => {
  return (
    <div className="container space-y-12">
        {/* Sobre Nós */}
        <div className="space-y-6">
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold text-green-800 pt-10"
          >
            Sobre Nós
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg"
          >
            No Eco Link, acreditamos que cada pequena ação pode gerar um grande impacto no futuro do nosso planeta. Nossa proposta vai além da preservação ambiental: buscamos conectar pessoas e iniciativas que promovam práticas sustentáveis e responsáveis, incentivando uma mudança positiva em nossa comunidade.
          </p>
        </div>

        {/* Nossa Proposta */}
        <div className="space-y-6">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl font-semibold text-green-700"
          >
            Nossa Proposta
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg"
          >
            Propomos soluções que não apenas protegem o meio ambiente, mas também transformam a conscientização em ações concretas. Reconhecemos a importância de iniciativas que valorizam a sustentabilidade, oferecendo incentivos, prêmios e o reconhecimento a todos que contribuem para um mundo mais verde.
          </p>
        </div>

        {/* Nosso Compromisso */}
        <div className="space-y-6">
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-3xl font-semibold text-green-700"
          >
            Nosso Compromisso
          </h2>
          <ul
            data-aos="fade-up"
            data-aos-delay="500"
            className="list-disc pl-6 space-y-2 text-lg"
          >
            <li>Educar e conscientizar sobre o impacto do descarte incorreto de resíduos.</li>
            <li>Incentivar o descarte correto, reduzindo a poluição e protegendo a biodiversidade.</li>
            <li>Promover a sustentabilidade, conectando pessoas e comunidades a recursos e ideias inovadoras.</li>
            <li>Premiar e reconhecer aqueles que fazem a diferença no cuidado com o planeta.</li>
          </ul>
        </div>

        {/* Por Que Sustentabilidade Importa */}
        <div className="space-y-6">
          <h2
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-3xl font-semibold text-green-700"
          >
            Por Que Sustentabilidade Importa?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="700"
            className="text-lg"
          >
            A sustentabilidade é fundamental para o equilíbrio entre as necessidades humanas e a saúde do nosso planeta. O descarte inadequado de resíduos, por exemplo, não apenas polui o solo, a água e o ar, mas também ameaça a vida selvagem e os ecossistemas locais. Compreender e agir sobre essas questões é essencial para garantir a qualidade de vida das futuras gerações.
          </p>
        </div>

        {/* Nossa Missão */}
        <div className="space-y-6">
          <h2
            data-aos="fade-up"
            data-aos-delay="800"
            className="text-3xl font-semibold text-green-700"
          >
            Nossa Missão
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="700"
            className="text-lg"
          >
            Nossa missão é criar uma rede de conscientização e engajamento em prol de um futuro mais verde e harmonioso. Acreditamos que atitudes simples, como o descarte correto e o incentivo à educação ambiental, podem transformar a realidade ao nosso redor.
          </p>
        </div>

        {/* Call to Action */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center mb-100"
        >
          <a
            href="/cadastro"
            className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-md duration-200 inline-block mb-20"
          >
            Junte-se ao Eco Link
          </a>
        </div>
      </div>
  );
};

export default Sobre;