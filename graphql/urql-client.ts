import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from "urql";

const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:3000/graphql",
  fetchOptions: () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    return {
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  },
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
});

export default client;
