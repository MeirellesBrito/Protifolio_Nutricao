import imgDoSobre from "../../assets/imgDoSobre.webp";
export default function Sobre() {
  return (
    <div className="fundo_escuro shadow-lg">
      <div className="lg:m-16 p-4 flex items-center justify-between flex-wrap">
        <img
          src={imgDoSobre}
          alt="sobre"
          // className="lg:w-[45%] w-full h-full  "
          className="lg:w-[45%] w-full h-full aspect-[9/9]"
        />
        <div className="lg:w-[50%] w-full lg:p-4 text-white">
          <h3 className="text-center text-4xl font-bold mb-4">Quem sou eu?</h3>
          <p className="text-base">
            Kaio Rocha, nutricionista esportivo e empresário, pós-graduado em
            emagrecimento e metabolismo, com certificação internacional em
            sport’s and nutricion coach e preparador de atletas de
            fisiculturismo. Sou especialista em processos de mudança de
            composição corporal, seja emagrecimento ou hipertrofia, buscando
            alinhar isso a uma melhor qualidade de vida e performance. Trabalho
            de forma 100% on-line, trazendo eficiência e conforto para meus
            pacientes, sempre com a garantia de um trabalho de qualidade.
          </p>
        </div>
      </div>
    </div>
  );
}
