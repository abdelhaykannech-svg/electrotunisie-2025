"use client"; // Obligatoire car on utilise du clic et un état
import { useState } from 'react';
import Link from 'next/link';
import { Zap, Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Zap size={24} className="text-secondary fill-secondary" />
          <span className="font-title font-bold text-xl">ET</span>
        </Link>

        {/* BOUTON HAMBURGER (Visible uniquement sur mobile) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* LIENS (Desktop) */}
        <ul className="hidden md:flex gap-8 font-menu text-sm font-semibold uppercase tracking-wide items-center">
          <li><Link href="/" className="hover:text-secondary transition-colors">Accueil</Link></li>
          <li><Link href="/produits" className="hover:text-secondary transition-colors">Produits</Link></li>
          <li><Link href="/inscription" className="hover:text-secondary transition-colors">Inscription</Link></li>
          <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          <li>
            <button className="bg-secondary hover:bg-white hover:text-primary text-primary px-5 py-2 rounded-full font-menu font-bold text-xs uppercase transition-all shadow-md ml-4">
              Connexion
            </button>
          </li>
        </ul>
      </div>

      {/* MENU MOBILE (Visible uniquement quand isOpen est true) */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-blue-900 px-4 py-6 flex flex-col gap-6 font-menu font-bold uppercase text-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-secondary">Accueil</Link>
          <Link href="/produits" onClick={() => setIsOpen(false)} className="hover:text-secondary">Produits</Link>
          <Link href="/inscription" onClick={() => setIsOpen(false)} className="hover:text-secondary">Inscription</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-secondary">Contact</Link>
          <button className="bg-secondary text-primary px-5 py-3 rounded-md font-bold uppercase text-sm">
            Connexion
          </button>
        </div>
      )}
    </nav>
  );
}
