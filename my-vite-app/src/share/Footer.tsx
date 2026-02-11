export function Footer() {
  return (
    <footer className="bg-[#070B16] text-gray-400 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo o nombre */}
        <div className="text-white font-bold text-xl">
          MovieApp 🎬
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/movies" className="hover:text-white transition-colors">
            Películas
          </a>
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
        </div>

        {/* Derechos */}
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MovieApp. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
