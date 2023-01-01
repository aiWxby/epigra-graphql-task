/* --------------------------------- Imports -------------------------------- */
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';
/* -------------------------------------------------------------------------- */

/* ----------------------------- Client Settings ---------------------------- */
const httpLink = createHttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});
/* -------------------------------------------------------------------------- */

/* -------------------------------- Provider -------------------------------- */
const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
});
/* -------------------------------------------------------------------------- */

export default apolloProvider;