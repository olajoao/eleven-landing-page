export function Banner() {
  return (
    <>
      <section className="p-16 w-full bg-indigo-700 shadow shadow-indigo-800 rounded-3xl my-10 relative">
        <div className="absolute w-max left-2/3 mx-auto top-14">
          <div className="relative">
            <span className="z-10 absolute left-4 -top-10 2xl:top-3 w-10 h-10 border border-white rounded-full"></span>
            <span className="z-20 absolute left-0 -top-8 2xl:top-0 w-10 h-10 border-4 border-white rounded-full"></span>
          </div>
        </div>

        <div className="absolute w-max left-2/4 bottom-20">
          <div className="relative">
            <span className="z-10 absolute left-2 top-7 w-10 h-10 border-t-4 border-r-4 border-white"></span>
            <span className="z-20 absolute left-0 w-10 h-10 border-b-2 border-l-2 border-white"></span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-white leading-normal">
            Tenha o melhor projeto, desenvolvedores <br /> e suporte do mundo!
          </h1>
          <button className=" font-semibold tracking-widest py-4 px-10 bg-orange-600 text-white shadow shadow-indigo-900">
            CONTRATAR
          </button>
        </div>
      </section>
    </>
  );
}
