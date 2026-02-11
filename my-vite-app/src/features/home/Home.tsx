export function Home() {
  return (
    <div className="min-h-screen bg-[#070B16] flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-5xl font-bold mb-4">Bienvenido a MovieApp 🎬</h1>
      <p className="text-gray-300 text-lg max-w-xl text-center">
        Explora nuestra colección de películas, revisa sus detalles y encuentra tus favoritas.
      </p>
      <div className="mt-8">
        <a
          href="/movies"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors"
        >
          Ver Películas
        </a>
      </div>
    </div>
  );
}
