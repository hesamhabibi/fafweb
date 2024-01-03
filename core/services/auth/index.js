import {mutation} from '@core/helpers/graphql';
import {
  REGISTER_SEND_SMS,
  LOGIN_SEND_SMS,
  SMS_LOGIN_VERIFY_TOKEN,
  LOGIN,
  REGISTER,
  HAS_USER,
  CHANGE_PASSWORD,
  UPDATE_USER
} from './_mutations';

const login_mutation = async (variables, options = {}) => {
  const {gql} = options;

  const result = await mutation(gql || LOGIN, variables, options);
  return {
    auth: result?.data?.login,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const register_mutation = async (variables, options = {}) => {
  const {gql} = options;

  const result = await mutation(gql || REGISTER, variables, options);
  return {
    auth: result?.data?.register,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const register_send_sms_mutation = async (variables, options = {}) => {
  const {gql} = options;
  const result = await mutation(gql || REGISTER_SEND_SMS, variables, options);
  return {
    auth: result?.data?.registerSendSMS,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const login_send_sms_mutation = async (variables, options = {}) => {
  const {gql} = options;
  const result = await mutation(gql || LOGIN_SEND_SMS, variables, options);
  return {
    auth: result?.data?.loginSendSMS,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const sms_login_verify_token_mutation = async (variables, options = {}) => {
  const {gql} = options;
  const result = await mutation(gql || SMS_LOGIN_VERIFY_TOKEN, variables, options);
  return {
    auth: result?.data?.SMSLoginVerifyToken,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const update_user_mutation = async (variables, options = {}) => {
  const {gql} = options;

  const result = await mutation(gql || UPDATE_USER, variables, options);
  return {
    data: result?.data?.updateUser,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const has_user_mutation = async (variables, options = {}) => {
  const {gql} = options;
  const result = await mutation(gql || HAS_USER, variables, options);
  return {
    hasUser: result?.data?.hasUser,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

const change_password_mutation = async (variables, options = {}) => {
  const {gql} = options;
  const result = await mutation(gql || CHANGE_PASSWORD, variables, options);
  return {
    data: result?.data?.changePassword,
    errors: result?.errors || false,
    status: result?.status || false,
  };
}

export {
  register_send_sms_mutation,
  login_send_sms_mutation,
  sms_login_verify_token_mutation,
  update_user_mutation,
  login_mutation,
  register_mutation,
  has_user_mutation,
  change_password_mutation,
}