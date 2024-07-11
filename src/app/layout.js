import { Inter, Oswald, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ variable: "--font_inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font_oswald", subsets: ["latin"] });
const quicksand = Quicksand({
  variable: "--font_quicksand",
  subsets: ["latin"],
});

export const metadata = {
  title: "Companhia de Copas",
  description: "Teatro e arte para todas as idades",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${oswald.variable} ${quicksand.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
