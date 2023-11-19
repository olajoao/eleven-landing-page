import { Check } from "lucide-react";

export function Description() {
  return (
    <>
      <section className="py-10 flex items-center">
        <div className="flex-1">
          <img src="./hero2-bg.png" alt="Man flying on rocket" />
        </div>
        <div className="flex flex-col gap-5 max-w-sm xl:max-w-2xl pl-20 2xl:pl-0">
          <h1 className="text-3xl font-bold">
            Acelere sua empresa fazendo a{" "} 
            <span className="text-oragen-600">escolha certa</span>
          </h1>
          <p className="text-gray-600">
            Crie seu aplicativo, landing page ou aplicação web que convertem
            muito mais visitantes.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <span className="bg-orange-600 p-0.5 rounded-full flex items-center justify-center">
                <Check color="white" size={14} />
              </span>
              <span className="text-gray-600">
                Possibilidades de design ilimitadas
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-orange-600 p-0.5 rounded-full flex items-center justify-center">
                <Check color="white" size={14} />
              </span>
              <span className="text-gray-600">
                Features completamente responsivas
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-orange-600 p-0.5 rounded-full flex items-center justify-center">
                <Check color="white" size={14} />
              </span>
              <span className="text-gray-600">
                Fácil customização (suporte integral)
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
