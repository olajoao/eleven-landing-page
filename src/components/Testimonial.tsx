import { StarIcon } from "lucide-react";

export function Testimonial() {
  return (
    <>
      <section className="py-20 bg-gray-100">
        <div className="flex items-center container mx-auto gap-x-20">
          <article className="mt-10 px-5 pb-6 pt-10 rounded-2xl relative bg-white shadow">
            <div className="p-1.5 w-16 h-16 rounded-full absolute left-4 -top-8 bg-white">
              <img
                src="https://picsum.photos/100"
                className="rounded-full w-full"
              />
            </div>
            <h2 className="text-gray-800 font-semibold text-2xl mb-1">
              Jhone Lown
            </h2>
            <div className="flex items-center gap-1">
              <StarIcon size={20} className="text-amber-400 fill-amber-400" strokeWidth={1}/>
              <StarIcon size={20} className="text-amber-400 fill-amber-400" strokeWidth={1}/>
              <StarIcon size={20} className="text-amber-400 fill-amber-400" strokeWidth={1}/>
              <StarIcon size={20} className="text-amber-400 fill-amber-400" strokeWidth={1}/>
              <StarIcon size={20} className="text-amber-300 fill-amber-100" strokeWidth={1}/>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              "Depois de 1 mês usando o projeto XYZ da Eleven, finalmente
              consegui organizar minha empresa"
            </p>
          </article>

          <div>
            <h1 className="text-gray-800 font-semibold text-4xl">
              Depoimentos <br></br>
              Clientes ElevenSoft
            </h1>
            <h2 className="text-gray-500 mt-3">
              O que nossos clientes tem a dizer sobre nosso serviço, confira!
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
