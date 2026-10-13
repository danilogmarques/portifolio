import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danilo Marques | Portfólio",
  description:
    "Portfólio de Danilo Marques, pessoa desenvolvedora web. Conheça projetos, tecnologias e entre em contato.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[#f8f7f3] font-sans text-[#20231f]">
        {children}
      </body>
    </html>
  );
}
