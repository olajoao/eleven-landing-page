export function Clients() {
  return (
    <>
      <section className="py-10 text-center">
        <h1 className="text-orange-600 font-semibold">
          Conheça Nossos Clientes
        </h1>
        <h2 className="text-xl mt-8 mb-10">
          Esses carinhas estão usando nossos serviços e estão <br /> mais
          felizes que nunca.
        </h2>
        <div className="grid grid-cols-5 place-content-center gap-x-16 items-center">
          <figure>
            <img src="./uber.png" alt="logo google" />
          </figure>
          <figure>
            <img src="./google.png" alt="logo google" />
          </figure>
          <figure>
            <img src="./paypal.png" alt="logo google" />
          </figure>
          <figure>
            <img src="./microsoft.png" alt="logo google" />
          </figure>
          <figure>
            <img src="./dribble.png" alt="logo google" />
          </figure>
        </div>
      </section>
    </>
  );
}
