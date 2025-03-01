import Pharmapack from "../../assets/Pharmapack.webp";
import HorsepowerPro from "../../assets/HorsepowerPro.webp";
import DrogariasBomPreco from "../../assets/DrogariasBomPreco.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dicas = [
  {
    img: Pharmapack,
    alt: "Pharmapack",
    titulo: "Pharmapack",
    descricao: "Seu medicamento manipulado de forma prática e personalizada",
  },
  {
    img: HorsepowerPro,
    alt: "Horsepower Pro",
    titulo: "Horsepower Pro",
    descricao:
      "Sua Revista On-line de Musculação Desde 2013 promovendo o esporte com amor e dedicação. Cupom: KAIO",
  },
  {
    img: DrogariasBomPreco,
    alt: "Drogarias Bom Preço",
    titulo: "Drogarias Bom Preço",
    descricao:
      "Cupom válido para produtos de Nutrição Esportiva somente em loja física",
  },
];

export default function Parceiros() {
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
    <div className="fundo_escuro ">
      <div className="p-4 text-white  max-w-screen-lg mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-5">Lojas parceiras</h2>
        {/* Layout para telas grandes */}
        <div className="m-8 hidden md:flex justify-center gap-6 justify-between">
          {dicas.map((dica, index) => (
            <div key={index} className="w-68 flex flex-col items-center">
              <div>
                <img
                  src={dica.img}
                  alt={dica.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-center mt-3">
                <h3 className="text-lg font-semibold">{dica.titulo}</h3>
                <p className="text-sm">{dica.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carrossel para celular */}
        <div className="md:hidden mb-5">
          <Slider {...settings}>
            {dicas.map((dica, index) => (
              <div key={index} className="text-center  ">
                <div className="w-full flex justify-center items-center flex-col">
                  <div>
                    <img
                      src={dica.img}
                      alt={dica.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{dica.titulo}</h3>
                  <p className="text-sm">{dica.descricao}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
