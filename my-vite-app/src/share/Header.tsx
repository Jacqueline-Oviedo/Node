export function Header() {
  return (
    <header className="bg-[#070B16] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          MovieApp 🎬
        </div>

        {/* Navegación */}
        <nav className="flex gap-6">
          <a
            href="/"
            className="hover:text-yellow-400 transition-colors font-semibold"
          >
            Home
          </a>
          <a
            href="/movies"
            className="hover:text-yellow-400 transition-colors font-semibold"
          >
            Películas
          </a>
          <a
            href="/about"
            className="hover:text-yellow-400 transition-colors font-semibold"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
