import "@/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

import client from "@/lib/apollo-client";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
