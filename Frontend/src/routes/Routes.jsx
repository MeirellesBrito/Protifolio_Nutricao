import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../paginas/home/Home";
import CalcuraloraMarcos from "../paginas/marcos/CalcuraloraMarcos";
import TelaSubstituicao from "../paginas/substituicao/TelaSubstituicao";
import Navbar from "../componentes/navbar/Navbar";
import Banner from "../componentes/banner/Banner";
import Foot from "../componentes/foot/Foot";
import ScrollToTop from "../componentes/ScrollToTop";
import Whatsapp from "../componentes/whatsapp/Whatsapp";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CalcuraloraMarcos" element={<CalcuraloraMarcos />} />
        <Route path="/Substituicao" element={<TelaSubstituicao />} />
      </Routes>
      <Whatsapp />
      <Foot />
    </Router>
  );
}
