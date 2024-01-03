"use client"

import {usePathname} from "next/navigation";

import NavLink from "../../components/common/NavLink";

import {Col, Container, Nav, Row} from "react-bootstrap";

import Icon from "../../components/common/Icon";
import useAuthFunctions from "@core/hooks/useAuthFunctions";
import {useRouter} from "next/navigation";
import {useLayoutEffect} from "react";
import {useAuthContext} from "@core/contexts/AuthContext";

export default function AccountLayout({children}) {

  const pathname = usePathname()

  const router = useRouter();

  const {user_is_login , user_details} = useAuthContext();

  const {logout_user} = useAuthFunctions();

  useLayoutEffect(() => {

    if (user_is_login === false) router.push('/')

  }, [user_is_login])


  // -----------------------------------------------------------------------------------------------------------------

  const arrayMenu = [
    {title: 'پروفایل', href: '/account/profile', icon: <Icon name="UserCircle" className="ms-1 me-3 opacity-54"/>},
    {title: 'سفارش ها', href: '/account/orders', icon: <Icon name="ShoppingBag" className="ms-1 me-3 opacity-54"/>},
    {title: 'نشانی ها', href: '/account/addresses', icon: <Icon name="Signpost" className="ms-1 me-3 opacity-54"/>},
    {title: 'مورد علاقه ها', href: '/account/favorites', icon: <Icon name="Heart" className="ms-1 me-3 opacity-54"/>},
    {title: 'دیدگاه ها', href: '/account/favorites', icon: <Icon name="MessageCircle" className="ms-1 me-3 opacity-54"/>},
    {title: 'تغییر رمز عبور', href: '/account/change-password', icon: <Icon name="Fingerprint" className="ms-1 me-3 opacity-54"/>},
    {title: ''},
  ]

  // -----------------------------------------------------------------------------------------------------------------

  return (
    <div id="pageAccountLayout" className="mt-n4 pb-5">
      <Container fluid="xxl">
        <Row className="g-3 g-lg-5">
          <Col id="colMenu" xs={3}>
            <h1 className="fs-5 mb-3">حساب کاربری</h1>
            <div className="rounded-4 border py-3 bg-body z-1 position-relative">
              <div className="px-4">
                <div className="fw-normal">{user_details?.full_name || 'کاربر مهمان'}</div>
                <div className="opacity-54 mt-1 mb-n1-50">{user_details?.mobile}</div>
              </div>
              <hr/>
              <Nav className="flex-column">
                {
                  arrayMenu.map((item, index) => (
                    item.title ? (
                        <Nav.Link as={NavLink} href={item?.href} className="px-3" key={index}>{item.icon}{item.title}</Nav.Link>
                    ) : (
                      <hr className="mx-3" key={index}/>
                    )
                  ))
                }
                <a className="nav-link px-3" role="button" onClick={() => {logout_user(); router.push('/')}}>
                  <Icon name="LogOut" className="ms-1 me-3 opacity-54 flip-h"/>خروج از حساب کاربری
                </a>
              </Nav>
            </div>
          </Col>
          <Col xs>
            <h2 className="fs-5 mb-3">{arrayMenu.find(({href}) => href === pathname)?.title}</h2>
            <div className="mt-1-25 rounded-4 p-1-25 content">{children}</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
