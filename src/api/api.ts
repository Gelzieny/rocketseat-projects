import type { PageDataProjectSlug } from "@/@types/hygraph";
import { hygraphClient } from "@/utils/hygraph-client";

export const getProjectPageDataSlug = async (slug: string): Promise<PageDataProjectSlug> => {
  const query = `
    query ProjectQuery($slug: String!) {
      project(where: {slug: $slug}) {
        githubUrl
        description {
          raw
          text
        }
        pageThumbnail {
          url
        }
        technologies {
          name
        }
        thumbnail {
          url
        }
        sections {
          image {
            url
          }
          title
        }
        title
        shortDescription
        liveProjectUrl
      }
    }
  `;

  const variables = { slug };

  return hygraphClient<PageDataProjectSlug>(query, variables);
};