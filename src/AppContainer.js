import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://jogodabiblia.com/graphql",
  cache: new InMemoryCache(),
});

export const AppContainer = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
