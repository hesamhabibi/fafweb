"use client"

import PageHome from "@/components/pages/Home/Home";

import {has_ssr} from "@core/helpers/render-type";
import {SMS_LOGIN_VERIFY_TOKEN} from "@core/services/auth/_mutations";

export default function Home() {
  // -----------------------------------------------------------------------------------------------------------------

  return (
    <PageHome/>
  )
}
