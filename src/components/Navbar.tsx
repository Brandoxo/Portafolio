export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="text-white">
            Inicio
          </a>
        </li>
        <li>
          <a href="/about" className="text-white">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="/projects" className="text-white">
            Proyectos
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
