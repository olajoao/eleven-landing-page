import {
  PenLine,
  Move3d,
  ScatterChart,
  Trophy,
  LucideIcon,
} from "lucide-react";
import { ServiceItem } from "./ServiceItem";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  colors: string;
  icon: LucideIcon;
}

export function Services() {
  const servicesData: ServiceItem[] = [
    {
      id: String(window.crypto.getRandomValues(new Uint8Array(12))),
      title: "Desenvolvimento",
      description: "Crie sua plataforma com a nossa melhor qualidade",
      colors: "shadow-yellow-200 bg-yellow-300",
      icon: PenLine,
    },
    {
      id: String(window.crypto.getRandomValues(new Uint8Array(12))),
      title: "UX/UI Design",
      description:
        "Nós provemos serviços de Design, e claro com a melhor qualidade",
      colors: "shadow-lime-200 bg-lime-300",
      icon: Move3d,
    },
    {
      id: String(window.crypto.getRandomValues(new Uint8Array(12))),
      title: "Dashboards",
      description: "Gráficos e relatórios para controle total de sua empresa",
      colors: "shadow-sky-200 bg-sky-300",
      icon: ScatterChart,
    },
    {
      id: String(window.crypto.getRandomValues(new Uint8Array(12))),
      title: "Histório de premiações",
      description: "Nosso software é premiado por sua performance",
      colors: "shadow-orange-200 bg-orange-300",
      icon: Trophy,
    },
  ];

  return (
    <>
      <section className="py-10 text-center">
        <h1 className="text-orange-600 font-semibold">Nossos Serviços</h1>
        <h2 className="font-bold font-gray-800 mt-8 mb-10 text-3xl">
          Tudo que você precisa
        </h2>
        <div className="grid grid-cols-4 gap-x-16 place-content-center items-center">
          {servicesData.map((service) => (
            <ServiceItem
              key={service.id}
              className={service.colors}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
