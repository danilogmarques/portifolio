import Image from "next/image";

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

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M5 15 15 5M6 5h9v9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M3.5 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="border-b border-[#e9e5dc]">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8"
        >
          <a
            href="mailto:danilogustavomarques@gmail.com"
            className="shrink-0 whitespace-nowrap font-mono text-xl font-semibold tracking-tight text-[#20231f]"
            aria-label="Enviar e-mail para Danilo Marques"
          >
            <span className="text-[#f06c49]">&lt;</span>Danilo Marques
            <span className="text-[#f06c49]"> /&gt;</span>
          </a>
          <div className="flex items-center gap-3 text-sm font-medium text-[#65675f] sm:gap-8">
            <a
              className="hidden transition hover:text-[#20231f] sm:inline"
              href="#sobre"
            >
              Sobre
            </a>
            <a className="transition hover:text-[#20231f]" href="#projetos">
              Projetos
            </a>
            <a
              className="whitespace-nowrap rounded-full bg-[#20231f] px-3 py-2.5 text-white transition hover:bg-[#f06c49] sm:px-4"
              href="#contato"
            >
              <span className="sm:hidden">danilogustavomarques@gmail.com</span>
              <span className="hidden sm:inline">Vamos conversar</span>
            </a>
          </div>
        </nav>
      </header>

      <section
        id="inicio"
        className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-32"
      >
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e9e5dc] bg-white/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#65675f]">
            <span className="h-2 w-2 rounded-full bg-[#78a878]" />
            Desenvolvedor(a) web
          </div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.07] tracking-[-0.055em] text-[#20231f] sm:text-6xl lg:text-[4.5rem]">
            Idéias que viram experiências{" "}
            <span className="font-serif font-medium italic text-[#f06c49]">
              digitais.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#65675f] sm:text-lg sm:leading-8">
           Desenvolvedor Full-Stack com formação pela Labenu e cursos complementares pela Udemy e DIO. Conhecimentos no
desenvolvimento de aplicações web e mobile com tecnologias de front-end e back-end, integração com APIs, bancos de dados
relacionais, testes e práticas de deploy. Busco evoluir continuamente por meio de projetos práticos e boas práticas de
desenvolvimento.
            Sou músico baixista gosto de séries, cinema, tecnologia e leitura o que facilita meus estudos li livro como: Eloquente JavaScript, Entendedo algoritmos entre outros.Gosto de desafios e de aprender coisas novas.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-[#20231f] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#f06c49]"
            >
              Explorar projetos <ArrowIcon />
            </a>
            <a
              href="mailto:danilogustavomarques@gmail.com"
              className="rounded-full px-5 py-3.5 text-sm font-semibold text-[#20231f] transition hover:bg-white"
            >
              Entre em contato
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 text-sm text-[#65675f]">
            <span className="h-px w-10 bg-[#d9d4ca]" />
            Disponível para novos projetos
          </div>
        </div>

        <div
          role="img"
          aria-label="Ilustração de uma janela de código sobre um fundo com baixo, animação e animais de estimação"
          className="hero-artwork relative mx-auto w-full max-w-[500px]"
        >
          <div className="absolute -right-3 -top-5 h-24 w-24 rounded-full bg-[#e6d9f6] sm:-right-6 sm:-top-8 sm:h-32 sm:w-32" />
          <div className="absolute -bottom-5 -left-4 h-20 w-20 rounded-full bg-[#f6c69d] sm:-bottom-7 sm:-left-7 sm:h-28 sm:w-28" />
          <div className="relative overflow-hidden rounded-2xl border border-[#343a3b] bg-[#202627] shadow-[0_28px_70px_-28px_rgba(32,38,39,0.45)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f28d78]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e9c46a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#91bd8a]" />
              </div>
              <span className="font-mono text-xs text-white/45">
                portfolio.ts
              </span>
              <span className="w-8" />
            </div>
            <div className="px-5 py-7 font-mono text-[13px] leading-8 sm:px-8 sm:py-9 sm:text-sm">
              <p className="text-white/35">01</p>
              <p>
                <span className="text-[#c792ea]">const</span>{" "}
                <span className="text-[#f6d28b]">developer</span> = {"{"}
              </p>
              <p className="pl-5">
                <span className="text-[#a8c7fa]">nome</span>:{" "}
                <span className="text-[#b4d5a6]">&quot;Danilo Marques&quot;</span>,
              </p>
              <p className="pl-5">
                <span className="text-[#a8c7fa]">foco</span>:{" "}
                <span className="text-[#b4d5a6]">&quot;Experiências web&quot;</span>,
              </p>
              <p className="pl-5">
                <span className="text-[#a8c7fa]">feitoCom</span>: [
              </p>
              <p className="pl-10 text-[#b4d5a6]">&quot;criatividade&quot;,</p>
              <p className="pl-10 text-[#b4d5a6]">&quot;tecnologia&quot;,</p>
              <p className="pl-10 text-[#b4d5a6]">&quot;café&quot;</p>
              <p className="pl-5">],</p>
              <p className="pl-5">
                <span className="text-[#a8c7fa]">abertoPara</span>:{" "}
                <span className="text-[#b4d5a6]">&quot;novos desafios&quot;</span>
              </p>
              <p>{"};"}</p>
              <p className="mt-4 text-white/35">02</p>
              <p>
                <span className="text-[#c792ea]">console</span>.
                <span className="text-[#82c9bd]">log</span>(
                <span className="text-[#b4d5a6]">&quot;Vamos criar?&quot;</span>);
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-[#f06c49] align-middle" />
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-[11px] text-white/40">
              <span>UTF-8</span>
              <span>TypeScript · Pronto para criar</span>
            </div>
          </div>
          <div className="absolute -bottom-8 right-2 rounded-xl border border-[#e9e5dc] bg-white px-4 py-3 shadow-lg sm:-right-4">
            <p className="text-xs text-[#65675f]">Sempre aprendendo</p>
            <p className="mt-1 text-sm font-semibold text-[#20231f]">
              Criando com intenção <span aria-hidden="true">✳</span>
            </p>
          </div>
        </div>
      </section>

      <div className="border-y border-[#e9e5dc] bg-white/55">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-sm font-medium text-[#65675f] sm:px-8 md:justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98988f]">
            Tecnologias do dia a dia
          </span>
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <section
        id="sobre"
        className="mx-auto grid max-w-6xl gap-8 px-6 py-24 sm:px-8 sm:py-28 md:grid-cols-[0.7fr_1.3fr] md:gap-16"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f06c49]">
            Um pouco sobre mim
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#20231f] sm:text-4xl">
            Prazer, <span className="font-serif italic">Danilo Marques.</span>
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-8 text-[#65675f]">
            Sou uma pessoa desenvolvedora apaixonada por transformar problemas
            em soluções simples e intuitivas. Gosto de unir design e tecnologia
            para criar experiências digitais acessíveis, responsivas e com
            propósito.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {["Desenvolvimento front-end", "UI & acessibilidade", "Aprendizado contínuo"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e2ded5] px-3.5 py-2 text-sm text-[#65675f]"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="projetos" className="bg-[#efede6]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f06c49]">
                Feito com curiosidade
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#20231f] sm:text-4xl">
                Projetos selecionados
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#65675f]">
              Alguns trabalhos e experimentos que mostram como penso e construo
              para a web.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-[#e2ded5] bg-[#faf9f6] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-24px_rgba(32,35,31,0.25)]"
              >
                <div className="relative h-52 overflow-hidden bg-[#e7dff0]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-4 rounded-full bg-white/85 px-2.5 py-1 font-mono text-xs text-[#20231f]/70">
                    / {project.number}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-tight text-[#20231f]">
                      {project.title}
                    </h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Abrir ${project.title}`}
                        className="rounded-full border border-[#e2ded5] p-2 text-[#65675f] transition group-hover:border-[#20231f] group-hover:text-[#20231f]"
                      >
                        <ArrowIcon diagonal />
                      </a>
                    )}
                  </div>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-[#77786f]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#efede6] px-2.5 py-1 text-[11px] font-medium text-[#65675f]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#202627] px-7 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6cba0]">
            Tem uma ideia?
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Vamos construir algo{" "}
            <span className="font-serif font-medium italic text-[#f6a17f]">
              incrível.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
            Estou sempre aberto(a) a conhecer pessoas, ideias e novos desafios.
            Me mande uma mensagem!
          </p>
          <a
            href="mailto:danilogustavomarques@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f6a17f] px-5 py-3.5 text-sm font-semibold text-[#20231f] transition hover:bg-white"
          >
            danilogustavomarques@gmail.com <ArrowIcon diagonal />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#e9e5dc]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-[#77786f] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>
            Feito por <span className="font-medium text-[#20231f]">Danilo Marques</span>{" "}
            com cuidado e café.
          </span>
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 transition hover:text-[#f06c49]"
          >
            Voltar ao início <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
