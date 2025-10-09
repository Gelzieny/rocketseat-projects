export async function hygraphClient<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const url = import.meta.env.VITE_HYGRAPH_API_URL;
  const token = import.meta.env.VITE_HYGRAPH_TOKEN;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  // Verifica se a resposta é válida
  if (!res.ok) {
    const text = await res.text();
    console.error("Erro HTTP ao chamar Hygraph:", res.status, res.statusText, text);
    throw new Error(`Erro ao chamar API Hygraph (${res.status})`);
  }

  // Tenta fazer o parse do JSON
  let responseBody;
  try {
    responseBody = await res.json();
  } catch {
    throw new Error("A resposta da Hygraph não é um JSON válido ou veio vazia.");
  }

  if (responseBody.errors) {
    console.error("Hygraph GraphQL Errors:", responseBody.errors);
    throw new Error("Erro ao buscar dados da Hygraph");
  }

  return responseBody.data;
}
