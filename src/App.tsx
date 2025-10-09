import { BackgroundBlur } from "./components/background_blur";
import { CardProject } from "./components/card_project";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <BackgroundBlur />

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </main>
      <Footer />
    </div>
  )
}
