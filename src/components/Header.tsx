export function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-3">
        <a href="/" className="w-20 h-auto">
          {/* <h1 className="text-orange-600 text-2xl font-bold">E-Soft</h1> */}
          <img className="w-full" src="./logo.png" alt="Eleven soft logo" />
        </a>

        <ul className="flex items-center gap-10 font-semibold">
          <li className="text-orange-600">Sobre</li>
          <li>Serviços</li>
          <li>Preços</li>
        </ul>

        <button className="border border-orange-600 font-bold py-2 px-5 rounded text-orange-600">Contato</button>
      </header>
    </>
  )
}