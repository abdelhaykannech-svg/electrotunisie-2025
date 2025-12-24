"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nom: yup.string().min(5, "Minimum 5 caractères").required("Nom obligatoire"),
  telephone: yup.string()
    .matches(/^[0-9]{8}$/, "Le téléphone doit contenir exactement 8 chiffres")
    .required("Téléphone obligatoire"),
  password: yup.string().min(6, "Minimum 6 caractères").required("Mot de passe obligatoire"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], "Les mots de passe ne correspondent pas")
    .required("Confirmation obligatoire"),
  acceptTerms: yup.boolean().oneOf([true], "Vous devez accepter les conditions").required()
}).required();

export default function InscriptionPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => console.log("Inscription réussie :", data);

  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-2xl shadow-xl border border-gray-50">
      <h2 className="font-title text-2xl text-primary text-center mb-8 uppercase">Créer un compte</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-menu mb-1">Nom complet</label>
          <input {...register("nom")} className="w-full p-2 border rounded border-gray-300" />
          <p className="text-red-500 text-xs mt-1">{errors.nom?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-menu mb-1">Téléphone (8 chiffres)</label>
          <input {...register("telephone")} className="w-full p-2 border rounded border-gray-300" />
          <p className="text-red-500 text-xs mt-1">{errors.telephone?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-menu mb-1">Mot de passe</label>
          <input type="password" {...register("password")} className="w-full p-2 border rounded border-gray-300" />
          <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-menu mb-1">Confirmer le mot de passe</label>
          <input type="password" {...register("confirmPassword")} className="w-full p-2 border rounded border-gray-300" />
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword?.message}</p>
        </div>

        <div className="flex items-start gap-2 py-2">
          <input type="checkbox" {...register("acceptTerms")} id="terms" className="mt-1" />
          <label htmlFor="terms" className="text-xs text-gray-600">
            J'accepte les conditions générales de vente d'ElectroTunisie.
          </label>
        </div>
        <p className="text-red-500 text-xs">{errors.acceptTerms?.message}</p>

        <button type="submit" className="w-full bg-primary text-white py-3 rounded font-menu font-bold hover:bg-secondary transition-colors uppercase">
          S'inscrire
        </button>
      </form>
    </div>
  );
}
