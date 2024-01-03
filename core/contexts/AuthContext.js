"use client"

import {createContext, useContext, useEffect, useMemo, useState} from "react";
import {usePathname} from 'next/navigation'
import {decode_cookie} from "@core/helpers/cookie";
import Cookies from "js-cookie";

const _cookie_token_name = 'token';
const _cookie_user_token_name = 'user_token';

const AuthContext = createContext(false);

export const AuthContextProvider = ({
                                      children,
                                      cookie_token_key,
                                      cookie_user_token_key
                                    }) => {
  cookie_token_key = cookie_token_key || _cookie_token_name
  cookie_user_token_key = cookie_user_token_key || _cookie_user_token_name

  const pathname = usePathname();

  const [user_details, set_user_details] = useState(null);
  const [user_is_login, set_user_is_login] = useState(null);

  const loadUserFromCookies = _ => {
    let token = Cookies.get(cookie_token_key);
    let user_token = Cookies.get(cookie_user_token_key);
    if (token && user_token) {
      user_token = JSON.parse(user_token)
      if (user_token?.user) {
        const _user = decode_cookie(user_token?.user)
        set_user_details({..._user})
        set_user_is_login(true)
      } else {
        set_user_is_login(false);
      }
    } else {
      set_user_is_login(false);
    }
  }

  useEffect(() => {
    loadUserFromCookies();
  }, [pathname]);

  const values = useMemo(() => ({
    user_details,
    set_user_details,
    user_is_login,
    set_user_is_login,
    cookie_token_key,
    cookie_user_token_key
  }), [user_details, user_is_login])

  return (
    <AuthContext.Provider value={...values}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
