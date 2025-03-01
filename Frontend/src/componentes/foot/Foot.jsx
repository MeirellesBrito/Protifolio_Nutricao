import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Foot() {
  return (
    <footer className="fundo_escuro text-gray-300 py-8 text-center">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Contato */}
        <div>
          <h3 className="text-white font-semibold text-lg">Contato</h3>
          <p>Telefone: (92) 4002-8922</p>
          <p>Email de atendimento: atendimento@kr.com</p>
          <p>Problemas com o site: atendimento@deinput.com.br</p>
        </div>

        {/* Endereço */}
        <div>
          <h3 className="text-white font-semibold text-lg">Endereço</h3>
          <p>Logradouro: Rua Comandante Norberto Won Gal, 33</p>
          <p>Complemento: Administração CJ Hi</p>
          <p>Bairro: Redenção</p>
          <p>CEP: 69047-095</p>
          <p>Município: Manaus</p>
          <p>Estado: Amazonas</p>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-white font-semibold text-lg">
            Nossas Redes sociais
          </h3>
          <div className="flex justify-center space-x-4 mt-2">
            {/* Ícone do Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite nossa página no Facebook"
            >
              <FaFacebookSquare
                size={30}
                className="text-blue-600 hover:text-blue-800"
              />
            </a>

            {/* Ícone do Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite nosso perfil no Instagram"
            >
              <FaInstagram
                size={30}
                className="text-pink-600 hover:text-pink-800"
              />
            </a>

            {/* Ícone do YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite nosso canal no YouTube"
            >
              <IoLogoYoutube
                size={30}
                className="text-red-600 hover:text-red-800"
              />
            </a>

            {/* Ícone do WhatsApp */}
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Converse conosco no WhatsApp"
            >
              <FaWhatsapp
                size={30}
                className="text-green-500 hover:text-green-700"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-sm text-gray-400">
        <p>
          CNPJ: xxxxxxxxxxxxxxxxxxxxxxxxxxxx, Razão Social: Amazônia P.L Marinho
        </p>
        <p>&copy; Copyright 2025 - Prossent - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
