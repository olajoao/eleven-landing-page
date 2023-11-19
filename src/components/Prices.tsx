import { PriceItem, PriceItemProps } from "./PriceItem";

export function Prices() {
  const pricesData: PriceItemProps[] = [
    {
      id: 1,
      price: 50,
      type: "Base",
      description: "Para maioria dos negócios que dejesam otimização na web",
    },
    {
      id: 2,
      price: 100,
      type: "Pro",
      description: "Para maioria dos negócios que dejesam otimização na web",
    },
    {
      id: 3,
      price: 200,
      type: "Enterprise",
      description: "Para maioria dos negócios que dejesam otimização na web",
    },
  ];

  return (
    <>
      <section className="py-10">
        <h1 className="text-gray-800 text-center font-semibold text-4xl">
          Nossos Preços
        </h1>
        <h2 className="text-gray-500 mt-5 text-sm text-center">
          escolha o preço que atende suas necessidades, <br></br> sempre
          entregaremos o melhor pra você
        </h2>

        <div className="flex justify-center gap-5 mt-28">
          {pricesData.map((priceItem) => (
            <PriceItem
              key={priceItem.id}
              price={priceItem.price}
              type={priceItem.type}
              description={priceItem.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
