import { useEffect, useState } from "react";
import { getProjectPageData } from "./api/api";
import { BackgroundBlur } from "./components/background_blur";
import { CardProject } from "./components/card_project";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import type { PageDataProject } from "@/@types/hygraph";

export default function App() {
  const [projects, setProjects] = useState<PageDataProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProjectPageData();
        setProjects(data);
      } catch (err) {
        console.error("Erro ao carregar projetos:", err);
        setError("Erro ao carregar projetos.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-400">
        Carregando projetos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }


  return (
    <div className="min-h-screen text-white">
      <Header />
      <BackgroundBlur />

      <div className="container mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects?.projects.map((project, index) => (
            <CardProject key={index} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
