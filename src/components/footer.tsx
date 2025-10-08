export function Footer() {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto px-4 py-8 text-center text-gray-500 text-sm">
      <p>
        © {startYear}
        {currentYear > startYear ? ` - ${currentYear}` : ""} Projects Rocketseat. Todos os direitos reservados.
      </p>
    </footer>
  )
}