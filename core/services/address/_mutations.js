import {gql} from "@apollo/client";
import address from "@core/gql-mockups/address";

const CREATE_USER_ADDRESS = gql`
  mutation ($input: UserAddressInput) {
    createUserAddress(input: $input) ${address}
  }
`;

const UPDATE_USER_ADDRESS = gql`
  mutation ($address_id: ID, $input: UserAddressInput){
    updateUserAddress(address_id: $address_id, input: $input) ${address}
  }
`;

const DELETE_USER_ADDRESS = gql`
  mutation ($address_id: ID){
    deleteUserAddress(address_id: $address_id){
      success
      message
    }
  }
`;

const SET_USER_DEFAULT_ADDRESS = gql`
  mutation ($address_id: ID) {
    setUserDefaultAddress(address_id: $address_id) {
      success
      message
    }
  }
`;

export {
  CREATE_USER_ADDRESS,
  UPDATE_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  SET_USER_DEFAULT_ADDRESS
}