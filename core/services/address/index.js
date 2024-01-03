import {mutation} from '@core/helpers/graphql';
import {GET_ALL_USER_ADDRESSES , GET_IRANIAN_STATES_AND_CITIES} from "./_queries";
import {
  CREATE_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  SET_USER_DEFAULT_ADDRESS,
  UPDATE_USER_ADDRESS
} from "@core/services/address/_mutations";

const get_user_addresses_query = async (variables, options = {}) => {
  const result = await mutation(GET_ALL_USER_ADDRESSES, variables, options);
  return {
    data: result?.data?.getAllUserAddresses,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const get_iranian_states_and_cities_query = async (variables, options = {}) => {
  const result = await mutation(GET_IRANIAN_STATES_AND_CITIES, variables, options);
  return {
    data: result?.data,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const create_address_mutation = async (variables, options = {}) => {
  const result = await mutation(CREATE_USER_ADDRESS, variables, options);
  return {
    data: result?.data?.createUserAddress,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const update_address_mutation = async (variables, options = {}) => {
  const result = await mutation(UPDATE_USER_ADDRESS, variables, options);
  return {
    data: result?.data?.updateUserAddress,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const delete_address_mutation = async (variables, options = {}) => {
  const result = await mutation(DELETE_USER_ADDRESS, variables, options);
  return {
    data: result?.data?.deleteUserAddress,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const set_default_address_mutation = async (variables, options = {}) => {
  const result = await mutation(SET_USER_DEFAULT_ADDRESS, variables, options);
  return {
    data: result?.data?.setUserDefaultAddress,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

export {
  get_user_addresses_query,
  get_iranian_states_and_cities_query,
  create_address_mutation,
  update_address_mutation,
  delete_address_mutation,
  set_default_address_mutation,
}