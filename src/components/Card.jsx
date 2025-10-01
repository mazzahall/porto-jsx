import introImg from "./assets/Intro.png";
import typeImg from "./assets/Type.png";
import reduxImg from "./assets/Redux.png";
import reactImg from "./assets/React.png";

const Certificates = () => {
  const cards = [
    {
      title: "Certificate Intro to UI&UX",
      description: "Penghargaan menyelesaikan kursus HTML dasar hingga mahir.",
      color: "#7C3AED", // ungu
      image: introImg,
    },
    {
      title: "Certificate TypeScript",
      description: "Sertifikat penyelesaian course TypeScript dasar.",
      color: "#0EA5E9", // biru
      image: typeImg,
    },
    {
      title: "Certificate React Redux",
      description: "Penghargaan dalam menyelesaikan pembelajaran React Redux.",
      color: "#EAB308", // kuning
      image: reduxImg,
    },
    {
      title: "Certificate React Dasar",
      description: "Sertifikat penguasaan React dasar.",
      color: "#111827", // hitam
      image: reactImg,
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-cyan-600 mb-10">
        My Certificates 🏆
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden w-80 hover:scale-105 transform transition duration-500"
          >
            {/* Bagian Gambar */}
            <div className="relative">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div
                className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center text-white font-semibold rounded-bl-lg"
                style={{ backgroundColor: card.color }}
              >
                dasar
              </div>
            </div>

            {/* Bagian Bawah */}
            <div className="bg-gray-900 text-center p-4 text-white">
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
