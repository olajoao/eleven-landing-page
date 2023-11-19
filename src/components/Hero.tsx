export function Hero() {
  return (
    <>
      <section className="flex items-center h-[calc(80vh-66px)]">
        <div className="flex flex-1 gap-5 flex-col pr-20">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl">
            Softwares excelentes contruídos por{" "}
            <span className="text-orange-600">desenvolvedores incríveis</span>
          </h1>
          <p className="text-gray-600">
            Nós construímos e gerenciamos um time de desenvolvedores para tornar
            sua visão em realidade
          </p>

          <button className="font-bold w-max mr-auto bg-orange-600 text-white py-3 px-10 rounded">
            Começar
          </button>
        </div>
        <div className="w-1/2">
          <img src="./hero-bg.png" alt="" />
        </div>
      </section>
    </>
  );
}
