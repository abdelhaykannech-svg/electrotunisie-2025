// components/Footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Copyright */}
        <p className="font-title text-primary font-bold text-lg mb-4">
          ElectroTunisie © 2025
        </p>

        {/* Liens utiles */}
        <div className="mb-6">
          <Link href="/contact" className="text-gray-600 hover:text-primary underline decoration-secondary underline-offset-4">
            Besoin d'aide ? Contactez-nous
          </Link>
        </div>

        {/* Réseaux Sociaux */}
        <div className="flex gap-6 mb-8 text-primary">
          <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
        </div>

        {/* Ligne finale */}
        <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
          Qualité Garantie • Prix Compétitifs • Service Après-Vente
        </div>
      </div>
    </footer>
  );
}
