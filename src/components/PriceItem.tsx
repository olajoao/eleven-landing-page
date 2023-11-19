import { Check } from "lucide-react";

export interface PriceItemProps {
  id?: number;
  price: number;
  type: string;
  description: string;
}

export function PriceItem({ price, type, description }: PriceItemProps) {
  return (
    <article
      className={`p-7 rounded-2xl max-w-md border border-transparent transition-colors duration-200 ${
        type === "Pro"
          ? "bg-indigo-700 text-white shadow-2xl shadow-indigo-800 transform -translate-y-20"
          : "hover:border-indigo-200"
      }`}
    >
      {type === "Pro" && (
        <span className="uppercase ml-auto w-max block rounded-full px-8 py-1 bg-indigo-800 text-amber-400 text-sm mb-3">
          mais popular
        </span>
      )}
      <h1
        className={`text-3xl mb-3 ${
          type === "Pro" ? "text-white" : "text-gray-800"
        }`}
      >
        <span className="font-bold">R${price} </span>
        <span
          className={`text-base ${
            type === "Pro" ? "text-gray-100" : "text-gray-400"
          }`}
        >
          /mês
        </span>
        <br></br>
        <span className="font-bold mt-3 block">{type}</span>
      </h1>

      <p
        className={`text-base max-w-xs my-5 ${
          type === "Pro" ? "text-gray-200" : "text-gray-500"
        }`}
      >
        {description}
      </p>

      <ul
        className={`flex flex-col gap-y-2 mb-7 text-left ${
          type === "Pro" ? "text-gray-200" : "text-gray-500"
        }`}
      >
        <li className="flex items-center gap-x-2 text-sm">
          <span
            className={`p-0.5 rounded-full ${
              type === "Pro" ? "bg-indigo-500/50" : "bg-indigo-50"
            }`}
          >
            <Check
              size={14}
              color={type === "Pro" ? "white" : "rgb(67, 56, 202)"}
            />
          </span>
          <span>Todos os links limitados</span>
        </li>
        <li className="flex items-center gap-x-2 text-sm">
          <span
            className={`p-0.5 rounded-full ${
              type === "Pro" ? "bg-indigo-500/50" : "bg-indigo-50"
            }`}
          >
            <Check
              size={14}
              color={type === "Pro" ? "white" : "rgb(67, 56, 202)"}
            />
          </span>
          <span>Plataforma de Analitics própria</span>
        </li>
        <li className="flex items-center gap-x-2 text-sm">
          <span
            className={`p-0.5 rounded-full ${
              type === "Pro" ? "bg-indigo-500/50" : "bg-indigo-50"
            }`}
          >
            <Check
              size={14}
              color={type === "Pro" ? "white" : "rgb(67, 56, 202)"}
            />
          </span>
          <span>Chat Suporte</span>
        </li>
        <li className="flex items-center gap-x-2 text-sm">
          <span
            className={`p-0.5 rounded-full ${
              type === "Pro" ? "bg-indigo-500/50" : "bg-indigo-50"
            }`}
          >
            <Check
              size={14}
              color={type === "Pro" ? "white" : "rgb(67, 56, 202)"}
            />
          </span>
          <span>Hashtags otimizadas</span>
        </li>
        <li className="flex items-center gap-x-2 text-sm">
          <span
            className={`p-0.5 rounded-full ${
              type === "Pro" ? "bg-indigo-500/50" : "bg-indigo-50"
            }`}
          >
            <Check
              size={14}
              color={type === "Pro" ? "white" : "rgb(67, 56, 202)"}
            />
          </span>
          <span>Usuários ilimitados</span>
        </li>
      </ul>

      <a
        className={`rounded-full px-10 py-3 block text-center transition-colors duration-200 ${
          type === "Pro"
            ? "bg-pink-600 text-white hover:bg-pink-800"
            : "bg-pink-50 text-pink-400 hover:bg-pink-100"
        }`}
        href="#"
      >
        Escolher plano
      </a>
    </article>
  );
}
