export function Search() {
  return (
    <div className="flex flex-row gap-2 bg-white outline-none rounded-lg h-12 w-md mt-5 pl-2">
      <input
        type="text"
        className="flex-1 p-2 outline-none"
        placeholder="Qual serviço você procura?"
      />
      <button className="flex-none bg-teal-400 text-white p-2 rounded-r-lg hover:bg-teal-300 transition duration-400">
        Buscar
      </button>
    </div>
  );
}
