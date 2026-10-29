import ProjectsCarousel from "./projects-carousel";

const projects = [
  {
    number: "01",
    title: "Aqua Gestão",
    description:
      "Plataforma para organizar unidades atendidas, serviços e equipes de saneamento, reunindo informações importantes para a gestão da operação.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "/aqua-gestao-preview.svg",
    imageAlt: "Ilustração conceitual do Aqua Gestão para operações de saneamento.",
    url: "https://dashboard-mu-orpin-56.vercel.app/dashboard",
  },
  {
    number: "02",
    title: "CosmoShop",
    description:
      "Protótipo de e-commerce com tema espacial, incluindo telas de acesso e criação de conta em uma interface inspirada na exploração do cosmos.",
    tags: ["React", "E-commerce", "CSS"],
    image: "/cosmoshop-planet.svg",
    imageAlt: "Planeta com anéis em destaque na arte espacial do CosmoShop.",
    url: "https://labecommerce-front-end.vercel.app/formulario",
  },
  {
    number: "03",
    title: "Painel do Eletricista",
    description:
      "Dashboard para eletricistas que apresenta as informações do trabalho em um painel digital, com foco em facilitar a visualização da rotina profissional.",
    tags: ["JavaScript", "Node.js", "Figma"],
    image: "/eletricista-preview.svg",
    imageAlt: "Ilustração conceitual de um dashboard para eletricistas.",
    url: "https://eletro-manager.vercel.app/dashboard",
  },
];

export default function Home() {
  return (
    <main>
      <section
        id="projetos"
        aria-labelledby="projects-heading"
        className="py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f06c49]">
                Portfólio
              </p>
              <h2
                id="projects-heading"
                className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f3efe9] sm:text-4xl"
              >
                Projetos
              </h2>
            </div>
            <p className="hidden pb-1 text-sm text-[#aaa39a] sm:block">
              Arraste para explorar
            </p>
          </div>
          <ProjectsCarousel projects={projects} />
        </div>
      </section>
    </main>
  );
}
