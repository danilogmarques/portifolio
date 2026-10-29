"use client";

import Image from "next/image";
import { Tooltip } from "radix-ui";
import { useCallback, useEffect, useRef, useState } from "react";

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  url: string;
};

function ArrowIcon({ previous = false }: { previous?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`h-5 w-5 ${previous ? "rotate-180" : ""}`}
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

export default function ProjectsCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const scrollCarousel = useCallback((direction: -1 | 1) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;

    if (!carousel || !(firstCard instanceof HTMLElement)) {
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (direction === 1 && maxScrollLeft - carousel.scrollLeft <= 8) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    carousel.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionPreference.matches);
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!isPlaying || isInteracting || prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        scrollCarousel(1);
      }
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isInteracting, isPlaying, prefersReducedMotion, scrollCarousel]);

  return (
    <div
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={(event) => {
        if (
          !(event.relatedTarget instanceof Node) ||
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          setIsInteracting(false);
        }
      }}
    >
      <Tooltip.Provider>
        <div className="mb-4 flex justify-end gap-2">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                type="button"
                aria-label={
                  isPlaying
                    ? "Pausar rotação automática"
                    : "Retomar rotação automática"
                }
                onClick={() => setIsPlaying((playing) => !playing)}
                className="rounded-full border border-[#393631] bg-[#1b1a18] px-4 text-sm font-medium text-[#f3efe9] transition hover:border-[#f06c49] hover:bg-[#292724] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f06c49]"
              >
                {isPlaying ? "Pausar" : "Retomar"}
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="bottom"
                sideOffset={8}
                className="z-50 rounded-md border border-[#393631] bg-[#242320] px-3 py-1.5 text-xs text-[#f3efe9] shadow-lg"
              >
                {isPlaying ? "Pausar rotação automática" : "Retomar rotação"}
                <Tooltip.Arrow className="fill-[#242320]" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                type="button"
                aria-label="Ver projetos anteriores"
                onClick={() => scrollCarousel(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#393631] bg-[#1b1a18] text-[#f3efe9] transition hover:border-[#f06c49] hover:bg-[#292724] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f06c49]"
              >
                <ArrowIcon previous />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="bottom"
                sideOffset={8}
                className="z-50 rounded-md border border-[#393631] bg-[#242320] px-3 py-1.5 text-xs text-[#f3efe9] shadow-lg"
              >
                Projeto anterior
                <Tooltip.Arrow className="fill-[#242320]" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                type="button"
                aria-label="Ver próximos projetos"
                onClick={() => scrollCarousel(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#393631] bg-[#1b1a18] text-[#f3efe9] transition hover:border-[#f06c49] hover:bg-[#292724] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f06c49]"
              >
                <ArrowIcon />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="bottom"
                sideOffset={8}
                className="z-50 rounded-md border border-[#393631] bg-[#242320] px-3 py-1.5 text-xs text-[#f3efe9] shadow-lg"
              >
                Próximo projeto
                <Tooltip.Arrow className="fill-[#242320]" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </Tooltip.Provider>

      <div
        ref={carouselRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Projetos"
        aria-live="off"
        className="projects-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5"
      >
        {projects.map((project) => (
          <article
            key={project.number}
            className="group min-w-[86%] snap-start overflow-hidden rounded-2xl border border-[#393631] bg-[#1b1a18] transition duration-300 hover:-translate-y-1 hover:border-[#514941] hover:shadow-[0_18px_45px_-24px_rgba(0,0,0,0.8)] sm:min-w-[calc(50%-0.625rem)]"
          >
            <div className="relative h-52 overflow-hidden bg-[#292724] sm:h-64">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 640px) 86vw, 48vw"
                className="object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-5 top-4 rounded-full bg-[#171614]/90 px-2.5 py-1 font-mono text-xs text-[#f3efe9]/80">
                / {project.number}
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-[#f3efe9] sm:text-xl">
                  {project.title}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${project.title}`}
                  className="rounded-full border border-[#393631] p-2 text-[#aaa39a] transition hover:border-[#f06c49] hover:text-[#f3efe9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f06c49]"
                >
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
                </a>
              </div>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[#aaa39a]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#292724] px-2.5 py-1 text-[11px] font-medium text-[#c2b9ae]"
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
  );
}
