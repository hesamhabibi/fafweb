import {email_regex, mobile_regex, iranian_postal_code_regex} from "@core/constants/regexs";

const check_regex = (regex, value) => regex?.test(value);

const is_mobile = value => check_regex(mobile_regex, value)
const is_email = value => check_regex(email_regex, value)
const is_iranian_postal_code = value => check_regex(iranian_postal_code_regex, value)

export {check_regex, is_mobile, is_email, is_iranian_postal_code};
