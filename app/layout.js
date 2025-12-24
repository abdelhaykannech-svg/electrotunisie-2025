import { Roboto, Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-opensans',
});
export const metadata = {
  title: "ElectroTunisie",
   description: "Équipez votre maison avec les meilleures marques d'électroménager en Tunisie, au meilleur prix",
};

export default function RootLayout({ children }) {
  return (
     <html lang="fr" className={`${roboto.variable} ${montserrat.variable} ${openSans.variable}`}>
       <body className="flex flex-col min-h-screen">
        <Header />
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}