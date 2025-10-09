export interface PageDataProject {
  projects: {
    title: string;
    shortDescription: string;
    description: {
      html: string;
    };
    githubUrl?: string;
    liveProjectUrl?: string;
    thumbnail: {
      url: string;
    };
    technologies: {
      name: string;
    }[];
  }[];
}