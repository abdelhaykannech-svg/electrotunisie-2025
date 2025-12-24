import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-white">
      {/* Image de fond avec overlay sombre */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('images.unsplash.com')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h2 className="font-title text-5xl mb-6 uppercase">Le meilleur de l'électroménager</h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg opacity-90 font-sans">
          Découvrez notre sélection exclusive de produits pour équiper votre maison au meilleur prix en Tunisie.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/produits" className="bg-secondary text-primary font-menu font-bold px-8 py-3 rounded-md hover:bg-white transition-all">
            Voir les produits
          </Link>
          <Link href="/contact" className="border-2 border-white font-menu font-bold px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all">
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  );
}
