"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schéma de validation
const schema = yup.object({
  nom: yup.string().min(4, "Le nom doit avoir au moins 4 caractères").required("Champ obligatoire"),
  email: yup.string().email("Email invalide").required("Champ obligatoire"),
  telephone: yup.string().required("Téléphone requis"),
  message: yup.string().max(30, "Maximum 30 caractères").required("Message requis"),
}).required();

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Données envoyées :", data);
    alert("Message envoyé avec succès !");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
      
      {/* Colonne de gauche : Infos Fictives */}
      <div className="space-y-6">
        <h2 className="font-title text-3xl text-primary uppercase">Infos de Contact</h2>
        <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
          <img 
            src="/images/contact.jpg"
            alt="Entrepôt ElectroTunisie" 
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-3 font-sans text-gray-700">
          <p><strong>📍 Adresse :</strong> Zone Industrielle, Sfax, Tunisie</p>
          <p><strong>📞 Tél :</strong> +216 74 000 000</p>
          <p><strong>📧 Email :</strong> support@electrotunisie.com.tn</p>
        </div>
      </div>

      {/* Colonne de droite : Formulaire */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 p-8 rounded-xl shadow-inner flex flex-col gap-4">
        <div>
          <label className="block font-menu text-sm mb-1 font-bold">Nom</label>
          <input 
            {...register("nom")} 
            className={`w-full p-2 border rounded ${errors.nom ? 'border-red-500' : 'border-gray-300'}`}
          />
          <p className="text-red-500 text-xs mt-1">{errors.nom?.message}</p>
        </div>

        <div>
          <label className="block font-menu text-sm mb-1 font-bold">Email</label>
          <input 
            {...register("email")} 
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block font-menu text-sm mb-1 font-bold">Téléphone</label>
          <input 
            {...register("telephone")} 
            className={`w-full p-2 border rounded ${errors.telephone ? 'border-red-500' : 'border-gray-300'}`}
          />
          <p className="text-red-500 text-xs mt-1">{errors.telephone?.message}</p>
        </div>

        <div>
          <label className="block font-menu text-sm mb-1 font-bold">Message (max 30 car.)</label>
          <textarea 
            {...register("message")} 
            className={`w-full p-2 border rounded h-32 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          />
          <p className="text-red-500 text-xs mt-1">{errors.message?.message}</p>
        </div>

        <button 
          type="submit" 
          className="bg-primary text-white py-3 font-menu uppercase font-bold hover:bg-secondary transition-colors rounded shadow-md mt-2"
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
}
