import { TechBadge } from "./tech-badge";

export function CardProject() {
  return (
    <div
      className="group bg-gradient-to-br from-purple-500/30 to-blue-500/30 
      dark:from-purple-400/40 dark:to-blue-400/40 rounded-2xl p-0.5 hover:scale-105 transition-all duration-300"
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden h-full transition-colors duration-300"
      >
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
            alt="Portfolio"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 
              group-hover:scale-110 transition-all duration-500"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            Desafio "Portfolio"
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
            Neste desafio você poderá criar uma página web para que seja seu
            portfólio e currículo, utilizando HTML e CSS.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex gap-2">
              <TechBadge
                names={["Html", "Css"]}
                className="flex items-center gap-2 text-sm py-1 px-3 rounded-lg text-gray-500"
              />
              {/* <span
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200"
              >
                HTML
              </span>
              <span
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200"
              >
                CSS
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
