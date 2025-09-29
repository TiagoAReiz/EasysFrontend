import { Search } from "./Search";

export function StartLand() {
  return (
    <section className="flex flex-col items-center justify-center  py-2 bg-[url(/land1.png)] bg-cover min-h-150">
      <h1 className="text-6xl font-bold text-center mb-8 text-white">
        Conectando você aos melhores profissionais
      </h1>
      <p className="text-center text-lg max-w-xl text-white">
        Encontre e agende serviços com facilidade e segurança.
      </p>
      <Search />
    </section>
  );
}
