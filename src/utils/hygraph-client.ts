export async function hygraphClient<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const res = await fetch(import.meta.env.HYGRAPH_API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await res.json();

  if (responseBody.errors) {
    console.error("Hygraph GraphQL Errors:", responseBody.errors);
    throw new Error("Erro ao buscar dados da Hygraph");
  }

  return responseBody.data;
}
