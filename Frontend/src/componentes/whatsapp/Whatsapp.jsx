import whatsapp_icon from "./WhatsApp-icon.png";

export default function Whatsapp() {
  // Lista de dados do botão
  const whatsappData = [
    {
      phoneNumber: "5592994686240", // Substitua pelo seu número com DDD
      message: "Olá! Gostaria de mais informações.", // Mensagem inicial no WhatsApp
    },
  ];

  // Criar link do WhatsApp
  const whatsappLink = `https://wa.me/${
    whatsappData[0].phoneNumber
  }?text=${encodeURIComponent(whatsappData[0].message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
    >
      <img
        alt="WhatsApp"
        className="w-12 h-12 aspect-square"
        src={whatsapp_icon}
      />
    </a>
  );
}
