export function Contact() {
  return (
    <>
      <section className="py-28 bg-gray-800">
        <div className="container mx-auto">
          <h1 className="text-4xl text-white font-thin text-center">
            Increva-se para receber dicas e promoções
          </h1>
          <p className="text-gray-400 text-center mt-5 mb-8">
            Increvendo-se com seu email, você aceita nossas políticas de
            privacidade
          </p>

          <form
            className="flex gap-3 items-center mx-auto w-full max-w-[60%]"
            action=""
          >
            <input
              className="flex-1 py-4 pl-6 pr-4 rounded-md bg-gray-700 text-gray-200 outline-none w-full"
              type="text"
              placeholder="Insira seu email"              
            />
            <button className="w-max min-w-max border-none outline-none font-thin py-4 px-10 rounded-md bg-indigo-500 text-white">
              Inscrever-se
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
