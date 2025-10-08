export function Footer() {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="container mx-auto px-4 py-8 text-center text-sm 
                 text-gray-600 dark:text-gray-400 
                 transition-colors duration-300"
    >
      <p>
        © {startYear}
        {currentYear > startYear ? ` - ${currentYear}` : ""}{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          Gelzieny R. Martins
        </span>
        . Todos os direitos reservados.
      </p>
    </footer>
  )
}