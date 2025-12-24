"use client";

export default function DetailsProduitCard({ produit }) {
  const handleAcheter = () => {
    alert("Produit ajouté au panier !");
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <img src={produit.image} alt={produit.nom} className="rounded-lg w-full object-cover h-80" />
      <div className="flex flex-col justify-center">
        <span className="text-secondary font-menu font-bold uppercase text-sm">{produit.categorie}</span>
        <h2 className="font-title text-3xl text-primary my-4">{produit.nom}</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">{produit.description}</p>
        <div className="text-4xl font-bold text-primary mb-8">{produit.prix} DT</div>
        <button 
          onClick={handleAcheter}
          className="bg-primary text-white font-menu py-4 rounded-xl hover:bg-secondary transition-all shadow-lg uppercase font-bold"
        >
          Acheter
        </button>
      </div>
    </div>
  );
}
