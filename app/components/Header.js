// components/Header
import { Refrigerator } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 py-8 text-center flex flex-col items-center justify-center">
      <div className="flex items-center gap-3">
        <Refrigerator size={40} className="text-primary" strokeWidth={1.5} />
        <h1 className="font-title text-3xl text-primary uppercase tracking-tighter">
          ElectroTunisie
        </h1>
      </div>
    </header>
  );
}
