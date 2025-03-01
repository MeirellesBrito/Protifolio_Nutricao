import imgBanner from "../../assets/Banner.webp";
import fotoComLogo from "../../assets/foto_com_Logo.webp";

export default function Banner() {
  return (
    <div className="relative w-full flex justify-center items-end">
      {/* Imagem de fundo */}
      <div className="relative w-full h-[250px] md:h-[400px] lg:h-[400px]">
        <img
          src={imgBanner}
          alt="Banner promocional com uma paisagem ao fundo"
          className="absolute w-full h-full object-cover"
         
          loading="eager"
        />
      </div>

      {/* Foto sobreposta */}
      <div className="absolute">
        <img
          src={fotoComLogo}
          alt="Foto do produto com o logo da empresa"
          className="w-70 md:w-lg lg:w-lg h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}
