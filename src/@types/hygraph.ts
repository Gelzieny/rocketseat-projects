export interface PageDataProjectSlug {
  project: {
    githubUrl: string;
    description: {
      raw: any; // Você pode definir um tipo melhor se estiver usando o editor do Hygraph (ex: `RichTextContent`)
      text: string;
    };
    pageThumbnail: {
      url: string;
    };
    technologies: {
      name: string;
    }[];
    thumbnail: {
      url: string;
    };
    sections: {
      image: {
        url: string;
      };
      title: string;
    }[];
    title: string;
    shortDescription: string;
    liveProjectUrl: string;
  };
}
