import Alimento from "../../assets/Alimentos.webp";
import Corrida from "../../assets/Corrida.webp";
import Disciplina from "../../assets/disciplina.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dicas = [
  {
    img: Alimento,
    alt: "Alimento",
    titulo: "Alimentação equilibrada",
    descricao:
      "Comer os alimentos certos, com a quantidade e variedade adequadas, é essencial para alcançar os objetivos nutricionais.",
  },
  {
    img: Corrida,
    alt: "Corrida",
    titulo: "Exercícios físicos",
    descricao:
      "A prática regular de atividades físicas potencializa os resultados da dieta e contribui para a saúde geral do corpo.",
  },
  {
    img: Disciplina,
    alt: "Disciplina",
    titulo: "Disciplina e consistência",
    descricao:
      "Manter um compromisso diário com a alimentação e os exercícios é fundamental para resultados duradouros.",
  },
];

export default function Dicas() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="m-16 w-screen-lg mx-auto px-4">
      {/* Layout para telas grandes */}
      <div className=" hidden md:flex justify-center gap-20 ">
        {dicas.map((dica, index) => (
          <div
            key={index}
            className="fundo_escuro w-80 flex flex-col justify-evenly items-center p-3 rounded-lg shadow-lg"
          >
            <img
              src={dica.img}
              alt={dica.alt}
              className="w-full h-60 object-cover rounded-lg"
              width="320" // Definindo a largura explícita
              height="240" // Definindo a altura explícita
            />
            <div className="text-[#ffff] text-center mt-3">
              <h3 className=" text-xl font-bold mb-2 ">{dica.titulo}</h3>
              <p className="text-sm font-semibold ">{dica.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carrossel para celular */}
      <div className="md:hidden">
        <Slider {...settings}>
          {dicas.map((dica, index) => (
            <div
              key={index}
              className="text-white text-center fundo_escuro p-3 rounded-lg shadow-lg"
            >
              <img
                src={dica.img}
                alt={dica.alt}
                className="w-full h-60 object-cover rounded-lg"
                width="320" // Definindo a largura explícita
                height="240" // Definindo a altura explícita
              />
              <h3 className=" mt-2 text-xl font-bold mb-2">{dica.titulo}</h3>
              <p className="text-sm mb-5">{dica.descricao}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
