import { useState } from "react";
import ListaTabela from "./Tabela.json";

export default function SubstituicaoAlimentos() {
  const [grupoSelecionado, setGrupoSelecionado] = useState("Proteína");
  const [alimento, setAlimento] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const grupos = [...new Set(ListaTabela.map((item) => item.group))];
  const alimentosNoGrupo = ListaTabela.filter(
    (item) => item.group === grupoSelecionado
  );
  const itemSelecionado = ListaTabela.find(
    (item) => item.description === alimento
  );

  const quantidadeProteinaPorGrama = itemSelecionado
    ? itemSelecionado.quantity / 100
    : 0;
  const proteinaTotal = quantidade
    ? Number(quantidade) * quantidadeProteinaPorGrama
    : 0;

  const substituicoes = alimentosNoGrupo.map((r) => ({
    description: r.description,
    quantity: proteinaTotal
      ? (proteinaTotal / (r.quantity / 100)).toFixed(0)
      : "-",
  }));

  return (
    <div className="lg:m-16  mb-8  p-6 bg-[#1F1F1F] text-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        🍏 Substituição de Alimentos 🍽️
      </h1>

      <div className="mb-6">
        <label className="block font-medium mb-1 text-white">
          Escolha o grupo:
        </label>
        <select
          className="w-full p-3 border border-white-500 rounded-lg shadow-sm bg-[#363535] text-white focus:ring-2 focus:ring-[#ffff]"
          value={grupoSelecionado}
          onChange={(e) => {
            setGrupoSelecionado(e.target.value);
            setAlimento("");
          }}
        >
          {grupos.map((grupo) => (
            <option key={grupo} value={grupo}>
              {grupo}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium mb-1 text-white">
          Escolha o alimento:
        </label>
        <select
          className="w-full p-3 border border-white-500 rounded-lg shadow-sm bg-[#363535] text-white focus:ring-2 focus:ring-[#ffff]"
          value={alimento}
          onChange={(e) => setAlimento(e.target.value)}
          disabled={alimentosNoGrupo.length === 0}
        >
          <option value="">Selecione um alimento</option>
          {alimentosNoGrupo.map((al) => (
            <option key={al.description} value={al.description}>
              {al.description}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium mb-1 text-white">
          Quantidade (g):
        </label>
        <input
          type="number"
          className="w-full p-3 border border-white-500 rounded-lg shadow-sm bg-[#363535] text-white focus:ring-2 focus:ring-[#ffff]"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          placeholder="Digite a quantidade em gramas"
          disabled={!alimento}
        />
      </div>

      {alimento && quantidade && (
        <div className="bg-[#363535] p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center mb-4 text-white">
            🍽️ Equivalências Alimentares 🍽️
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {substituicoes.map((sub) => (
              <li
                key={sub.description}
                className="p-4 bg-[#1F1F1F] rounded-lg shadow-md flex justify-between items-center hover:scale-105 transition-transform border border-[#ffff]"
              >
                <span className="font-medium">{sub.description}</span>
                <span className="text-[#FFB612] font-bold">
                  {sub.quantity}g
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
