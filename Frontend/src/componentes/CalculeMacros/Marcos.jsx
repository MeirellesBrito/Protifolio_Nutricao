import { useState, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import FINALVIDEO from "../../assets/FINAL-VIDEO-2-1.mp4";

export default function Marcos() {
  const [form, setForm] = useState({
    sexo: "",
    idade: "",
    altura: "",
    peso: "",
    objetivo: "",
    treino: "0",
    cardio: "0",
    atividade: "sedentario",
  });

  const [resultado, setResultado] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controle do modal
  const resultadoRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calcularMacros = (e) => {
    e.preventDefault();
    const { sexo, idade, altura, peso, objetivo, treino, cardio, atividade } =
      form;

    const idadeNum = parseInt(idade);
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);
    const treinoNum = parseInt(treino);
    const cardioNum = parseInt(cardio);

    if (!sexo || !idadeNum || !alturaNum || !pesoNum || !objetivo) {
      setResultado("Preencha todos os campos obrigatórios!");
      return;
    }

    let tmb =
      10 * pesoNum +
      6.25 * alturaNum -
      5 * idadeNum +
      (sexo === "masculino" ? 5 : -161);
    let fatorAtividade =
      atividade === "moderado" ? 1.375 : atividade === "intenso" ? 1.55 : 1.2;

    let calorias = tmb * fatorAtividade + treinoNum * 70 + cardioNum * 40;
    if (objetivo === "secar") calorias -= 500;
    calorias -= 150;

    const proteinas = pesoNum * 2;
    const gorduras = (calorias * 0.3) / 9;
    const carboidratos = (calorias - (proteinas * 4 + gorduras * 9)) / 4;
    const agua = pesoNum * 45;

    setResultado({
      calorias: Math.round(calorias),
      agua: Math.round(agua),
      carboidratos: Math.round(carboidratos),
      proteinas: Math.round(proteinas),
      gorduras: Math.round(gorduras),
    });

    // Abre o modal quando o cálculo for feito
    setIsModalOpen(true);

    // Rolando até o resultado
    if (resultadoRef.current) {
      resultadoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal ao clicar no "X"
  };

  const isFormValid = () => {
    const { sexo, idade, altura, peso, objetivo } = form;
    return sexo && idade && altura && peso && objetivo;
  };

  return (
    <div className="">
      {isModalOpen && (
        <div className="fixed overflow-y-auto inset-0  flex justify-center items-center z-50">
          {/* <div className="bg-white p-6 rounded-lg max-w-lg w-full "> */}
          <div className="mt-50 lg:mt-1 fundo_escuro lg:text-xl text-xs rounded-lg text-white p-6 flex flex-col md:flex-row items-center md:items-start gap-6 relative">
            {/* Resultados */}
            <div className="w-full">
              <h2 className="lg:text-xl text-sm  font-bold text-yellow-400 mb-1">
                Resultados:
              </h2>
              {typeof resultado === "string" ? (
                <p className="text-red-400">{resultado}</p>
              ) : (
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    🔥{" "}
                    <span className="text-yellow-400 font-bold">
                      {resultado.calorias}kcal
                    </span>{" "}
                    - Energia total diária para seu objetivo.
                  </li>
                  <li className="flex items-center gap-3">
                    💧{" "}
                    <span className="text-blue-400 font-bold">
                      {resultado.agua}ml
                    </span>{" "}
                    - Quantidade recomendada de água por dia.
                  </li>
                  <h2 className="lg:text-xl text-sm  mt-2 font-bold text-yellow-400 mb-1">
                    Informações Bônus:
                  </h2>
                  <li className="flex items-center gap-3">
                    🍞{" "}
                    <span className="text-green-400 font-bold">
                      {resultado.carboidratos}g
                    </span>{" "}
                    - Carboidratos fornecem energia para o corpo.
                  </li>
                  <li className="flex items-center gap-3">
                    🥩{" "}
                    <span className="text-purple-400 font-bold">
                      {resultado.proteinas}g
                    </span>{" "}
                    - Proteínas essenciais para recuperação muscular.
                  </li>
                  <li className="flex items-center gap-3">
                    🥑{" "}
                    <span className="text-pink-400 font-bold">
                      {resultado.gorduras}g
                    </span>{" "}
                    - Gorduras saudáveis são importantes para hormônios e
                    energia.
                  </li>
                </ul>
              )}
              {/* Botão do WhatsApp */}
              <div className="flex justify-center mt-4">
                <a
                  href="https://api.whatsapp.com/send?phone=5592981486162&text=Ol%C3%A1,%20vim%20pela%20Calculadora%20de%20Macros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  <FaWhatsapp size={30} />
                  Eu quero minha dieta
                </a>
              </div>
            </div>
            {/* Vídeo e botão do WhatsApp */}
            <div className="mt-5 lg:w-65 w-65  flex flex-col items-center gap-4">
              <video
                src={FINALVIDEO}
                className="w-full rounded-lg shadow-md"
                autoPlay
                loop
                controls
              />
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-xl font-bold text-gray-500 cursor-pointer hover:text-gray-700 focus:outline-none"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      <div className="lg:m-16 p-4">
        <h1 className="text-white text-4xl font-bold mb-6 text-center">
          CALCULADORA DE{" "}
          <span className="text-white px-3 bg-[#FFB612] rounded">MACROS</span>
        </h1>

        <form onSubmit={calcularMacros}>
          <div className="flex flex-wrap grid lg:grid-cols-4 lg:gap-y-8 gap-x-16 md:grid-cols-3 sm:grid-cols-2">
            {/* Campos do formulário */}
            <div className="flex flex-col p-2 ">
              <label className="text-white">Sexo:</label>
              <select
                name="sexo"
                value={form.sexo}
                onChange={handleChange}
                className="p-2 rounded bg-white w-full"
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
            </div>

            <div className="flex flex-col p-2">
              <label className="text-white">Idade (anos):</label>
              <input
                type="number"
                name="idade"
                value={form.idade}
                onChange={handleChange}
                className="p-2 rounded bg-white w-full"
              />
            </div>

            <div className="flex flex-col p-2">
              <label className="text-white">Altura (cm):</label>
              <input
                type="number"
                name="altura"
                value={form.altura}
                onChange={handleChange}
                className="p-2 rounded bg-white w-full"
              />
            </div>

            <div className="flex flex-col p-2">
              <label className="text-white">Peso (kg):</label>
              <input
                type="number"
                name="peso"
                value={form.peso}
                onChange={handleChange}
                className="p-2 rounded bg-white w-full"
              />
            </div>

            <div className="flex flex-col p-2">
              <label className="text-white">Objetivo:</label>
              <select
                name="objetivo"
                value={form.objetivo}
                onChange={handleChange}
                className="p-2 rounded bg-white w-full"
              >
                <option value="">Selecione</option>
                <option value="secar">Secar</option>
                <option value="manter">Manter</option>
                <option value="ganhar">Ganhar Massa</option>
              </select>
            </div>

            <div className="flex flex-col p-2">
              <label className="text-white">Treino Intenso:</label>
              <select
                name="treino"
                value={form.treino}
                onChange={handleChange}
                className="p-2 rounded bg-white w-full"
              >
                <option value="0">Não faço</option>
                <option value="3">3x por semana</option>
                <option value="5">5x por semana</option>
                <option value="6">6x por semana</option>
              </select>
            </div>

            <div className="flex flex-col p-2">
              <label className="text-white">Cardio ~30min:</label>
              <select
                name="cardio"
                value={form.cardio}
                onChange={handleChange}
                className="p-2 rounded bg-white w-full"
              >
                <option value="0">Não faço</option>
                <option value="2">2x por semana</option>
                <option value="5">5x por semana</option>
                <option value="6">6x por semana</option>
              </select>
            </div>

            <div className="flex flex-col p-2">
              <label className="text-white">Atividade diária:</label>
              <select
                name="atividade"
                value={form.atividade}
                onChange={handleChange}
                className="p-2 rounded bg-white w-full"
              >
                <option value="sedentario">Sedentário</option>
                <option value="moderado">Moderado</option>
                <option value="intenso">Intenso</option>
              </select>
            </div>
          </div>
          <div className="col-span-2 flex justify-center items-center mt-4">
            <button
              type="submit"
              className={`py-2 px-6 rounded-lg font-bold shadow-md transition ${
                isFormValid()
                  ? "bg-yellow-400 text-black hover:bg-yellow-500"
                  : "bg-gray-400 text-gray-700"
              }`}
              disabled={!isFormValid()}
            >
              Calcular
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
