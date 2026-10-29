import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danilo Marques | Portfólio",
  description:
    "Portfólio de Danilo Marques, pessoa desenvolvedora web. Conheça projetos, tecnologias e entre em contato.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="dark h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[#111110] font-sans text-[#f3efe9]">
        {children}
      </body>
    </html>
  );
}
