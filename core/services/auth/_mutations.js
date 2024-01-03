import {gql} from "@apollo/client";
import user from "@core/gql-mockups/user";

const REGISTER_SEND_SMS = gql`
  mutation($input: UserRegisterSendSmsInput!) {
    registerSendSMS(input: $input) {
      message
      success
    }
  }
`;

const LOGIN_SEND_SMS = gql`
  mutation($mobile: String!) {
    loginSendSMS(mobile: $mobile) {
      message
      success
    }
  }
`;

const SMS_LOGIN_VERIFY_TOKEN = gql`
  mutation ($mobile:String, $token: String) {
    SMSLoginVerifyToken(mobile: $mobile, token: $token) {
      user ${user}
      token
    }
  }
`;

const LOGIN = gql`
  mutation Login($input: UserLoginInput) {
    login(input: $input) {
      user ${user}
      token
    }
  }
`;

const REGISTER = gql`
  mutation Register($input: UserRegisterInput) {
    register(input: $input) {
      user ${user}
      token
    }
  }
`;

const HAS_USER = gql`
  mutation hasUser($input: HasUserInput) {
    hasUser(input: $input)
  }
`;

const CHANGE_PASSWORD = gql`
  mutation($input: changePasswordInput!) {
    changePassword(input: $input) {
      message
      success
    }
  }
`;

const UPDATE_USER = gql`
  mutation($input: updateUserInput!) {
    updateUser(input: $input) {
      message
      success
    }
  }
`;

export {
  REGISTER_SEND_SMS,
  LOGIN_SEND_SMS,
  SMS_LOGIN_VERIFY_TOKEN,
  LOGIN,
  REGISTER,
  HAS_USER,
  CHANGE_PASSWORD,
  UPDATE_USER
}