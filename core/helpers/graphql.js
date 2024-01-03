import client from "@core/services/apolloClient";
import {get_cookie} from "./cookie";

const query = async (query, variables, options = {}) => {
  return await new Promise(async (resolve, reject) => {
    return await client
      .query({
        query,
        variables,
        // fetchPolicy: "network-only",
        // fetchPolicy: 'cache-first',
        ...options,
        fetchPolicy: "network-only",
      })
      .then(({error, data}) => {
        if (error) {
          return reject({
            error,
            status: false,
          });
        }
        return resolve({
          data: data?.result ? data?.result : data,
          status: true,
        });
      }).catch((error) => {
        return resolve({
          errors: error.graphQLErrors,
          status: false,
        });
      });
  });

}
const queryFetch = async (query, variables, method = 'POST') => {
  const headers = new Headers();
  const token = get_cookie('token');
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", token ? `Bearer ${token}` : "");
  headers.append("Cookie", `token=${token}`);

  const graphql = JSON.stringify({query, variables})

  const requestOptions = {
    method,
    headers,
    body: graphql,
    redirect: 'follow'
  };
  return fetch(process.env.GRAPHQL_URL, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => JSON.parse(error));

}
const mutation = async (mutation, variables, options = {}) => {
  return await new Promise(async (resolve, reject) => {
    return await client
      .mutate({
        mutation,
        variables,
        // fetchPolicy: "network-only",
        ...options,
        fetchPolicy: "network-only",
      })
      .then(({error, data}) => {
        console.log("-----error", error);
        if (error) {
          return reject({
            errors: error,
            status: false,
          });
        }
        return resolve({
          data: data?.result ?? data,
          status: true,
        });
      })
      .catch((error) => {
        return resolve({
          errors: error.graphQLErrors,
          status: false,
        });
      });
  });
};

export {query, mutation, queryFetch}
