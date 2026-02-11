export function NotFound() {
  return (
    <div className="min-h-screen bg-[#070B16] flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Página no encontrada</p>
      <a
        href="/"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
      >
        Volver al Inicio
      </a>
    </div>
  );
}

