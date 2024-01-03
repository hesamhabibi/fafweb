import { usePathname } from "next/navigation"

import Link from "next/link"

export default function NavLink({ href, exact, children, ...props }) {

    const pathname = usePathname()

    // مقدار exact در حالت پیش فرض undefined می باشد
    if (exact || exact === undefined ? pathname === href : pathname.startsWith(href))
        props.className += ' active'

    // -----------------------------------------------------------------------------------------------------------------
    return (
        <Link href={href} {...props}>{children}</Link>
    )
}