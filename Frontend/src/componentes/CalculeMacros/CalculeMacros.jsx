import { Calculator } from "lucide-react";
export default function CalculeMacros() {
  const calculeMacros = [
    {
      titulo: "Calcule seus macros de forma fácil",
      descricao:
        "Saber a quantidade ideal de proteínas, carboidratos e gorduras que você deve consumir diariamente é essencial para alcançar seus objetivos, seja ganhar massa muscular, perder peso ou manter uma alimentação equilibrada. Com nosso cálculo de macros, você terá um plano personalizado de acordo com seu peso, altura, idade e nível de atividade física.",
    },
  ];

  return (
    <div className="fundo_escuro  ">
      {calculeMacros.map((calculeMacros, index) => (
        <div
          key={index}
          className="lg:mb-4 lg:mt-16 lg:mr-16 lg:ml-16 p-4 flex flex-col items-center text-white"
        >
          <h2 className="text-center text-4xl font-bold mb-5">
            {calculeMacros.titulo}
          </h2>
          <p className="mt-4 text-lg text-center">{calculeMacros.descricao}</p>
          <a
            href="/CalcuraloraMarcos"
            role="button"
            className="mt-6 flex items-center bg-[#FFB612] text-black px-6 py-2 rounded-lg font-bold hover:bg-[#E5A500] transition cursor-pointer"
          >
            <Calculator className="w-5 h-5 mr-2" /> Calcular meus macros
          </a>
        </div>
      ))}
    </div>
  );
}
