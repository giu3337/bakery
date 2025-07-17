import { Button } from "@/components/ui/button";
import { BakeryButton } from "@/components/ui/bakery-button";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Prueba de Botones - shadcn/ui
        </h1>

        <div className="space-y-8">
          {/* Botones COOKIES y CAKES personalizados */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Botones Personalizados - COOKIES y CAKES (shadcn/ui)
            </h2>
            <div className="flex gap-2">
              <BakeryButton variant="cookies">COOKIES</BakeryButton>
              <BakeryButton variant="cakes">CAKES</BakeryButton>
            </div>
          </section>

          {/* Botón simple para probar Tailwind */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Botón Simple (Tailwind)
            </h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded font-medium hover:bg-blue-600">
              Botón Simple
            </button>
          </section>

          {/* Botones de shadcn */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Botones shadcn/ui</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          {/* Diferentes tamaños */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Diferentes Tamaños</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🔍</Button>
            </div>
          </section>

          {/* Botones con iconos */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Con Iconos</h2>
            <div className="flex flex-wrap gap-4">
              <Button>
                <span>🚀</span>
                Lanzar
              </Button>
              <Button variant="outline">
                <span>💾</span>
                Guardar
              </Button>
              <Button variant="destructive">
                <span>🗑️</span>
                Eliminar
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
