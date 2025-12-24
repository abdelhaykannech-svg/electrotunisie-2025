// app/produits/page
import { produits } from '../data/produits';
import { ProduitCard } from '../components/ProduitCard';

export default function ProduitsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="font-title text-4xl text-primary mb-8 text-center uppercase tracking-widest">Nos Produits</h2>
      {/* Grille 3 colonnes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produits.map((p) => (
          <ProduitCard key={p.id} produit={p} />
        ))}
      </div>
    </div>
  );
}
