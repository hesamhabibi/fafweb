"use client"

import {useContext, useMemo} from "react";

import { usePathname } from "next/navigation"

import NavLink from "../../../../components/common/NavLink";

import ContextApp from "../../../../contexts/ContextApp";

import { Nav } from "react-bootstrap";

import Icon from "../../../common/Icon";

export default function HeaderMobile() {

    const { theme } = useContext(ContextApp)

    const pathname = usePathname()

    const arrayNavItem = useMemo(() => [
        {id: 'home', href: '/', title: 'خانه', icon: pathname === '/' ? <Icon name="HomeFill"/> : <Icon name="Home"/>},
        {id: 'category', href: '/category', title: 'دسته بندی', icon: pathname === '/category' ? <Icon name="CategoryFill"/> : <Icon name="Category"/>},
        {id: 'shoppingCart', href: '/shopping-cart', title: 'سبد خرید', icon: pathname === '/shopping-cart' ? <Icon name="ShoppingCartFill" className="flip-h"/> : <Icon name="ShoppingCart" className="flip-h"/>},
        {id: 'account', href: '/account', title: 'ثبت نام/ ورود', icon: pathname === '/account' ? <Icon name="UserFill"/> : <Icon name="User"/>},
    ], [pathname])

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <div id="headerMobile" className={`fixed-bottom shadow-1-reverse ${theme === 'dark' ? 'bg-secondary' : 'bg-white'}`}>
            <Nav className="flex-row">
                {
                    arrayNavItem.map(item => (
                        <Nav.Item className="col" key={item.id}>
                            <Nav.Link as={NavLink} href={item.href} className="d-flex flex-column justify-content-center align-items-center py-0">
                                <span className={`${pathname === item.href ? 'text-body' : 'text-body-38-opaque'}`}>{item.icon}</span>
                                <span className={`fs-10 pt-1-50 ${pathname === item.href ? 'text-body' : 'text-body-54-opaque'}`}>{item.title}</span>
                            </Nav.Link>
                        </Nav.Item>
                    ))
                }
            </Nav>
        </div>
    )
}
