import { produits } from '../../data/produits';
import DetailsProduitCard from '../../components/DetailsProduitCard';
import { notFound } from 'next/navigation';

// SEO Dynamique
export async function generateMetadata({ params }) {
  const { id } = await params;
  const produit = produits.find((p) => p.id === parseInt(id));

  if (!produit) return { title: "Produit non trouvé" };

  return {
    title: `${produit.nom} | ElectroTunisie`,
    description: produit.description,
  };
}

export default async function ProduitPage({ params }) {
  const { id } = await params;
  const produit = produits.find((p) => p.id === parseInt(id));

  if (!produit) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <DetailsProduitCard produit={produit} />
    </div>
  );
}
