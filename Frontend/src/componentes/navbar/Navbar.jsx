import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "sobre" },
    { name: "Planos", path: "planos" },
    { name: "Calcular", path: "/CalcuraloraMarcos" },
    { name: "Substituição", path: "/Substituicao" },
    { name: "Lojas Parceiras", path: "parceiros" },
  ];

  const handleNavigation = (path) => {
    if (path.startsWith("/")) {
      navigate(path); // Vai para outra página
    } else {
      if (location.pathname === "/") {
        // Se já estiver na /, rola até a seção
        document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Se estiver em outra página, vai para / e depois rola até a seção
        navigate("/", { state: { scrollTo: path } });
      }
    }
    setMenuOpen(false); // Fecha o menu no mobile
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 text-white z-50 h-[50px] flex items-center">
      <div className="lg:m-16 w-full flex items-center justify-between px-6 md:px-16">
        <div className="h-[40px] flex items-center">
          <img src={logo} alt="Logo" className="h-full w-full" />
        </div>

        <div className="md:hidden" role="menu">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul
          className={`md:flex md:space-x-6 absolute md:static top-[50px] left-0 w-full md:w-auto bg-black/80 md:bg-transparent text-center md:text-left transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:text-gray-300 cursor-pointer py-2 md:py-0"
            >
              <button
                onClick={() => handleNavigation(link.path)}
                className="cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
