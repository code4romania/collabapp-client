import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const ApollotClient = new ApolloClient({
    link: new HttpLink(),  // TODO: set link to api preferably from config file
    cache: new InMemoryCache(),
});

export default ApollotClient;
