import {is_function} from "@core/helpers/function";
import {
  create_address_mutation, delete_address_mutation,
  get_iranian_states_and_cities_query,
  get_user_addresses_query, set_default_address_mutation, update_address_mutation
} from "@core/services/address";

const useAddressFunctions = () => {

  const get_user_addresses_api = async (args = {}) => {
    const {success_callback, error_callback} = args
    const result = await get_user_addresses_query();
    if (result?.status) {
      if (is_function(success_callback)) {
        success_callback(result)
      }
    } else {
      if (is_function(error_callback)) {
        error_callback(result)
      }
    }
  };

  const get_iranian_states_and_cities_user_addresses_api = async (args = {}) => {
    const {success_callback, error_callback} = args
    const result = await get_iranian_states_and_cities_query();
    if (result?.status) {
      if (is_function(success_callback)) {
        success_callback(result)
      }
    } else {
      if (is_function(error_callback)) {
        error_callback(result)
      }
    }
  };

  const create_address_api = async (args = {}) => {
    const {data, success_callback, error_callback} = args
    const result = await create_address_mutation(data);
    if (result?.status) {
      if (is_function(success_callback)) {
        success_callback(result)
      }
    } else {
      if (is_function(error_callback)) {
        error_callback(result)
      }
    }
  };

  const update_address_api = async (args = {}) => {
    const {data, success_callback, error_callback} = args
    const result = await update_address_mutation(data);
    if (result?.status) {
      if (is_function(success_callback)) {
        success_callback(result)
      }
    } else {
      if (is_function(error_callback)) {
        error_callback(result)
      }
    }
  };

  const delete_address_api = async (args = {}) => {
    const {data, success_callback, error_callback} = args
    const result = await delete_address_mutation(data);
    if (result?.status) {
      if (is_function(success_callback)) {
        success_callback(result)
      }
    } else {
      if (is_function(error_callback)) {
        error_callback(result)
      }
    }
  };

  const set_default_address_api = async (args = {}) => {
    const {data, success_callback, error_callback} = args
    const result = await set_default_address_mutation(data);
    if (result?.status) {
      if (is_function(success_callback)) {
        success_callback(result)
      }
    } else {
      if (is_function(error_callback)) {
        error_callback(result)
      }
    }
  };

  return {
    get_user_addresses_api,
    get_iranian_states_and_cities_user_addresses_api,
    create_address_api,
    update_address_api,
    delete_address_api,
    set_default_address_api,
  }
}
export default useAddressFunctions;