"use client"

import {useState} from "react";

import ModalAuth from "../../modals/Auth/Auth";

import {Offcanvas, Stack, Button, Nav, Navbar} from "react-bootstrap";

import Icon from "../../common/Icon";
import NavLink from "../../common/NavLink";
import {useAuthContext} from "@core/contexts/AuthContext";
import useAuthFunctions from "@core/hooks/useAuthFunctions";

export default function OffcanvasAccount({show, onHide, ...props}) {

  const {user_details, user_is_login} = useAuthContext();
  const {logout_user} = useAuthFunctions();

  // -----------------------------------------------------------------------------------------------------------------

  const arrayMenu = [
    {title: 'پروفایل', href: '/account/profile', icon: <Icon name="UserCircle" className="ms-1 me-3 opacity-54"/>},
    {title: 'سفارش ها', href: '/account/orders', icon: <Icon name="ShoppingBag" className="ms-1 me-3 opacity-54"/>},
    {title: 'نشانی ها', href: '/account/addresses', icon: <Icon name="Signpost" className="ms-1 me-3 opacity-54"/>},
    {title: 'مورد علاقه ها', href: '/account/favorites', icon: <Icon name="Heart" className="ms-1 me-3 opacity-54"/>},
    {
      title: 'دیدگاه ها',
      href: '/account/favorites',
      icon: <Icon name="MessageCircle" className="ms-1 me-3 opacity-54"/>
    },
  ]

  // -----------------------------------------------------------------------------------------------------------------

  const [modalAuthShow, setModalAuthShow] = useState(false)

  // -----------------------------------------------------------------------------------------------------------------

  return (
    <>
      <Navbar.Offcanvas id="offcanvasAccount" aria-labelledby="offcanvasAccountTitle" show={show} onHide={onHide}
                        placement="end" {...props} className="rounded-5 m-1">
        <Offcanvas.Header closeButton className="ps-lg-4">
          <Offcanvas.Title as="h6" id="offcanvasAccountTitle">
            {user_is_login ? user_details?.full_name : ' حساب کاربری'}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-lg-4">
          <Nav className="fs-6">
            {user_is_login ?
              <Stack>
                <Button
                  variant="secondary"
                  className="fs-6 rounded-3 ls-1-2"
                  onClick={() => logout_user()}
                >خروج از حساب کاربری</Button>
              </Stack>
              :
              <Stack>

                <Button variant="secondary" className="fs-6 rounded-3 ls-1-2"
                        onClick={() => setModalAuthShow(true)}>ورود</Button>
                <Button variant="link" className="fs-6 rounded-3 mt-2 align-items-baseline"
                        onClick={() => setModalAuthShow(true)}>
                  <span className="text-body-54-opaque fs-8 ws-n1 me-2">حساب کاربری ندارید؟</span>ثبت نام
                </Button>
              </Stack>
            }

            <hr className="mt-2"/>
            {
              user_is_login &&
              <>
                {
                  arrayMenu.map((item, index) => (
                    <Nav.Link as={NavLink} href={item.href} className="mx-n3-75 mx-lg-n4 px-3-75 px-lg-4"
                              key={index}>{item.icon}{item.title}</Nav.Link>
                  ))
                }
                <hr/>
              </>
            }
            <Nav.Link href="" className="mx-n3-75 mx-lg-n4 px-3 px-lg-4 text-body-54-opaque">ورود فروشندگان</Nav.Link>
            <Nav.Link href="" className="mx-n3-75 mx-lg-n4 px-3 px-lg-4 text-body-54-opaque">مرکز خدمات</Nav.Link>
            <Nav.Link href="" className="mx-n3-75 mx-lg-n4 px-3 px-lg-4 text-body-54-opaque">قوانین خرید</Nav.Link>
            <Nav.Link href="" className="mx-n3-75 mx-lg-n4 px-3 px-lg-4 text-body-54-opaque">حمایت ها</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
      <ModalAuth show={modalAuthShow} onHide={() => setModalAuthShow(false)} onHideSidebar={onHide}/>
    </>
  )
}