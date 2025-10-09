import type { PageDataProject } from "@/@types/hygraph";
import { hygraphClient } from "@/utils/hygraph-client";

export const getProjectPageData = async (): Promise<PageDataProject> => {
  const query = `
    query ProjectsQuery {
      projects {
        title
        shortDescription
        description {
          html
        }
        githubUrl
        liveProjectUrl
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
  `;
  return hygraphClient<PageDataProject>(query);
};