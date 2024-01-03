const email_regex = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
const mobile_regex = new RegExp(/09\d{9}/);
const iranian_postal_code_regex = new RegExp(/\d{10}/);

export { email_regex, mobile_regex, iranian_postal_code_regex };
