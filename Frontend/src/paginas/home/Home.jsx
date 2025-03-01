import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CalculeMacros from "../../componentes/CalculeMacros/CalculeMacros";
import Parceiros from "../../componentes/parceiros/Parceiros";
import Planos from "../../componentes/planos/Planos";
import Sobre from "../../componentes/sobre/Sobre";
import Substituicao from "../../componentes/substituicao/Substituicao";
import Dicas from "../../componentes/dicas/Dicas";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document
          .getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200); // Pequeno delay para garantir que a página carregou
    }
  }, [location]);

  return (
    <div>
      <Dicas />
      <div id="sobre">
        <Sobre />
      </div>
      <div id="planos">
        <Planos />
      </div>
      <CalculeMacros />
      <Substituicao />
      <div id="parceiros">
        <Parceiros />
      </div>
    </div>
  );
}
