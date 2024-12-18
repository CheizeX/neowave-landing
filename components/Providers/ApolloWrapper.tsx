"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/apollo-client";
import { ReactNode } from "react";

export default function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
