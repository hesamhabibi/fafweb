import address from "@core/gql-mockups/address";
import {gql} from "@apollo/client";

const GET_ALL_USER_ADDRESSES = gql`
  query {
    getAllUserAddresses ${address}
  }
`;

const GET_IRANIAN_STATES_AND_CITIES = gql`
  query {
    cities: getSettingByKey(key:"iran_all_cities") {
      value
    }
    states: getSettingByKey(key:"iran_all_states") {
      value
    }
  }
`;

export {
  GET_ALL_USER_ADDRESSES,
  GET_IRANIAN_STATES_AND_CITIES
}