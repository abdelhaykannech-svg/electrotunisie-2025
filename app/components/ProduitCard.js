import Link from 'next/link';
export function ProduitCard({ produit }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={produit.image} 
        alt={produit.nom} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <span className="text-xs font-menu text-secondary uppercase font-bold">
          {produit.categorie}
        </span>
        <h3 className="font-title text-xl text-primary mt-1 mb-2">
          {produit.nom}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {produit.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">
            {produit.prix} DT
          </span>
          {/* Le bouton + devient un lien vers la page dynamique /produits/[id] */}
          <Link 
            href={`/produits/${produit.id}`}
            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors text-xl font-bold"
            title="Voir les détails"
          >
            +
          </Link>
        </div>
      </div>
    </div>
  );
}
