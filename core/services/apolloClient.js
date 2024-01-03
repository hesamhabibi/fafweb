import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";
import {get_cookie} from '@core/helpers/cookie'

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL,
});

const authLink = setContext((_, {headers}) => {
  const token = get_cookie('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      // todo: add dynamic hostname
      'site-url': process.env.SITE_URL
    },
  };
});

const cmsCatch = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(cmsCatch)
});

export default client;