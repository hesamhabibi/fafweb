import {useAuthContext} from "@core/contexts/AuthContext";
import {set_cookie, encode_cookie} from "@core/helpers/cookie";
import {is_function} from "@core/helpers/function";
import {login_mutation, has_user_mutation, login_send_sms_mutation} from "@core/services/auth";
import Cookies from "js-cookie";
import {change_password_mutation, sms_login_verify_token_mutation, update_user_mutation} from "../services/auth";

const useAuthFunctions = () => {
  const {
    user_details,
    set_user_details,
    user_is_login,
    set_user_is_login,
    cookie_token_key,
    cookie_user_token_key
  } = useAuthContext();

  const has_user_with_username = async (args = {}) => {
    const {data, success_callback, error_callback} = args
    const result = await has_user_mutation({input: data});
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

  const login_send_sms = async (args = {}) => {
    const {data, success_callback, error_callback} = args
    const result = await login_send_sms_mutation(data);
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

  const login_username_password = async (args = {}) => {

    const {data, success_callback, error_callback} = args

    const result = await login_mutation({input: data});

    if (result?.status) {
      const {token, user} = result?.auth || {}
      set_cookie(cookie_token_key, token);
      set_cookie(cookie_user_token_key, JSON.stringify({user: encode_cookie(user)}));
      set_user_details(user);
      set_user_is_login(true)
      if (is_function(success_callback)) {
        success_callback(result)
      }
    } else {
      if (is_function(error_callback)) {
        error_callback(result)
      }
    }
  };

  const login_verify_sms = async (args = {}) => {

    const {data, success_callback, error_callback} = args

    const result = await sms_login_verify_token_mutation(data);

    if (result?.status) {
      const {token, user} = result?.auth || {}
      set_cookie(cookie_token_key, token);
      set_cookie(cookie_user_token_key, JSON.stringify({user: encode_cookie(user)}));
      set_user_details(user);
      set_user_is_login(true)
      if (is_function(success_callback)) {
        success_callback(result)
      }
    } else {
      if (is_function(error_callback)) {
        error_callback(result)
      }
    }
  };


  const logout_user = (args = {}) => {
    const {success_callback} = args
    Cookies.remove(cookie_token_key);
    Cookies.remove(cookie_user_token_key);
    set_user_details(null);
    if (user_is_login) {
      return set_user_is_login(false);
    }
    if (is_function(success_callback)) {
      success_callback()
    }
  };

  const change_password_api = async (args = {}) => {
    const {data, success_callback, error_callback} = args
    const result = await change_password_mutation({input: data});

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

  const update_user_profile_api = async (args = {}) => {
    const {data, success_callback, error_callback} = args
    const result = await update_user_mutation({input: data});
    if (result?.status) {
      const user = {
        ...user_details,
        ...data,
        full_name: `${data?.name} ${data?.last_name}`
      }
      set_cookie(cookie_user_token_key, JSON.stringify({user: encode_cookie(user)}));
      set_user_details(user);
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
    login_username_password,
    logout_user,
    has_user_with_username,
    login_send_sms,
    login_verify_sms,
    change_password_api,
    update_user_profile_api
  }
}
export default useAuthFunctions;