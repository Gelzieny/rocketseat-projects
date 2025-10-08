export function CardProject() {
  return (
    <>
      <div 
        className="group  rounded-2xl p-1 hover:scale-105 transition-all duration-300"
      >
        <div className="bg-gray-900  rounded-2xl overflow-hidden h-full transition-colors duration-300">
          <div className="aspect-video bg-gray-800 dark:bg-gray-100 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop" 
              alt="Portfolio" 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"/>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">
              Desafio "Portfolio"
            </h3>
            <p className="text-gray-400  mb-6 text-sm">
              Neste desafio você poderá criar uma página web para que seja seu portfolio e currículo. Utilizando HTML e CSS.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="carousel flex-1 flex space-x-2">
                <span className="carousel-item bg-gray-800 dark:bg-gray-200 px-4 py-2 rounded-lg text-xs font-semibold dark:text-gray-900">
                  HTML
                </span>
                <span className="carousel-item bg-gray-800 dark:bg-gray-200 px-4 py-2 rounded-lg text-xs font-semibold dark:text-gray-900">
                  CSS
                </span>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}