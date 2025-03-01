import { useState } from "react";

export default function Planos() {
  const planos = [
    {
      nome: "Plano Básico",
      preco: "R$ 250,00",
      descricao: [
        "Dieta individualizada, montada de acordo com a sua rotina, necessidade e objetivo.",
        "Lista de substituições, deixando sua dieta muito mais flexível e cheia de possibilidades.",
      ],
      detalhes:
        "24h para tirar dúvidas e fazer ajustes após a entrega da dieta. Não inclui suporte ou atualizações.",
      destaque: false,
    },
    {
      nome: "Plano Mensal",
      preco: "R$ 400,00",
      descricao: [
        "Dieta adaptada de acordo com o que você come normalmente e o que você gosta de comer.",
        "Lista para auxiliar nas possíveis substituições, tornando a dieta mais flexível.",
        "WhatsApp disponível das 9h às 21h para dúvidas de segunda a sábado.",
      ],
      detalhes:
        "Avaliação, feedback e ajustes da dieta (100% on-line, através de fotos).",
      destaque: true,
    },
    {
      nome: "Plano Trimestral",
      preco: "R$ 800,00",
      descricao: [
        "Dieta adaptada de acordo com o que você come normalmente e o que você gosta de comer.",
        "Lista para auxiliar nas possíveis substituições, tornando a dieta mais flexível.",
        "Planilha de treino.",
      ],
      detalhes:
        "WhatsApp disponível das 9h às 21h para dúvidas de segunda a sábado.",
      destaque: false,
    },
    {
      nome: "Plano Semestral",
      preco: "R$ 1400,00",
      descricao: [
        "Dieta adaptada de acordo com o que você come normalmente e o que você gosta de comer.",
        "Lista para auxiliar nas possíveis substituições, tornando a dieta mais flexível.",
        "Planilha de treino.",
      ],
      detalhes:
        "WhatsApp disponível das 9h às 21h para dúvidas de segunda a sábado.",
      destaque: false,
    },
  ];

  const [selecionado, setSelecionado] = useState(
    planos.findIndex((plano) => plano.destaque) // Começa com o plano destacado ativo
  );

  return (
    <div className="lg:m-16 p-4 text-white">
      <h2 className="text-center text-4xl font-bold mb-5">
        Escolha o plano que mais se adequa a você
      </h2>
      <div className="flex flex-wrap justify-between">
        {planos.map((plano, index) => (
          <div
            key={index}
            className={`shadow-lg relative border border-gray-700 rounded-xl lg:w-[320px] w-full p-4 m-2 flex flex-col items-center ${
              selecionado === index ? "bg-[#1F1F1F] " : "bg-[#363535]"
            } transition-colors duration-300 cursor-pointer`}
            onClick={() => setSelecionado(index)}
          >
            {plano.destaque && (
              <div className="absolute -top-3 bg-[#FFB612] text-black font-bold py-1 px-3 rounded-lg text-sm">
                O mais escolhido
              </div>
            )}

            <div className="border-b w-full flex justify-center items-center space-x-2 p-3">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  selecionado === index
                    ? "bg-black border-white"
                    : "bg-white border-white"
                }`}
              >
                {selecionado === index && (
                  <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
                )}
              </div>
              <h3 className="text-xl">{plano.nome}</h3>
            </div>

            <div className="text-sm mt-4 px-2 leading-relaxed flex-grow">
              {plano.descricao.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
              <p className="mt-4 text-xs opacity-80">{plano.detalhes}</p>
            </div>

            <div className="mt-5 bg-white rounded-lg px-6 py-2 text-center">
              <p className="text-black text-xl font-bold">{plano.preco}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <button className="bg-gray-700 text-white px-6 py-2 rounded-lg">
          Saiba mais
        </button>
        <button className="bg-[#FFB612] text-black px-6 py-2 rounded-lg font-bold">
          Continuar
        </button>
      </div>
    </div>
  );
}
