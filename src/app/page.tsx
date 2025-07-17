import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen uppercase">
      <h1 className="text-8xl font-bold text-cyan-500">Bakery</h1>
      <p className="text-2xl">Coming Soon</p>

      <div className="mt-8">
        <Link
          href="/test"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Ver Botones de Prueba
        </Link>
      </div>
    </div>
  );
}
