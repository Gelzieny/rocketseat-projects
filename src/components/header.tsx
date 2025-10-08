export function Header() {
  return (
    <>
      <header className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
          </div>
          <div>
            <p className="text-purple-400 text-xs md:text-sm uppercase tracking-wider">Rocketseat</p>
            <h1 className="text-2xl md:text-4xl font-bold">Projects </h1>            
          </div>
        </div>
      </div>
    </header>
    <div className="container mx-auto px-4">
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </div>
    </>
  )
}