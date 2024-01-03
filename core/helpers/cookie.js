import Cookies from "js-cookie";
import { has_ssr } from "./render-type";
import { share_request, share_request_middleware } from "@core/middlewares/share-request";

export const set_cookie = (key, value, expire_day, custom_path, custom_secure) => has_ssr() ?
  set_ssr_cookie(key, value, expire_day, custom_path, custom_secure) :
  Cookies.set(key, value, {
    expires: expire_day !== undefined ? expire_day : 365,
    path: custom_path !== undefined ? custom_path : '/',
    secure: custom_secure !== undefined ? custom_secure : false,
  });

export const get_cookie = key => has_ssr() ? get_ssr_cookie(key) : Cookies.get(key);
export const remove_cookie = key => has_ssr() ? remove_ssr_cookie(key) : Cookies.remove(key);

export const get_ssr_cookies = () => {
  if (share_request) {
    const cookies = share_request?.headers.cookie?.split("; ")
    let pares_cookies = {}
    cookies?.forEach((item) => {
      const separate_cookie = item.split("=")
      pares_cookies[`${separate_cookie[0]}`] = `${separate_cookie[1]}`
    })
    return pares_cookies
  } else return undefined
}

export const get_ssr_cookie = (key, req) => {
  const cookies = get_ssr_cookies(req)
  if (cookies) return cookies[key]
  else return cookies
}

export const remove_ssr_cookie = (key) => {
  const { removeCookies } = import('cookies-next')
  const { share_response } = import("../middlewares/share-response");
  removeCookies(key, { share_request, share_response });
}

export const set_ssr_cookie = (key, value, expire_day, custom_path, custom_secure) => {
  const { setCookies } = import('cookies-next')
  const { share_response } = import("../middlewares/share-response");

  setCookies(key, value, {
    share_request, share_response,
    maxAge: expire_day !== undefined ? expire_day : 365,
    path: custom_path !== undefined ? custom_path : '/',
  });
}

export const encode_cookie = (value) => {
  return b64e(JSON.stringify(value));
}
export const decode_cookie = value => {
  return JSON.parse(b64d(value));
}
export const b64e = (str) => {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

export const b64d = (str) => {
  return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
    return '%' + c.charCodeAt(0).toString(16);
  }).join(''));
}

export const checkAuthSSR = (req) => {
  share_request_middleware(req)
  const cookies = get_ssr_cookies()
  return !!cookies['token'];
}
export const setToken = (req) => share_request_middleware(req)