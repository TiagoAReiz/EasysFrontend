import { Card } from "./Card";

export function TopServices() {
  return (
    <section className="pb-55 mt-15">
      <h2 className="text-3xl font-bold text-center mb-12">
        Serviços em Destaque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
