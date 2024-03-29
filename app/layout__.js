import { ContextAppProvider } from "../contexts/ContextApp";
import { ContextNavigatorUserAgentProvider } from "../contexts/ContextNavigatorUserAgent";

import localFont from 'next/font/local'
import Header from "../components/Layout/Header/Header";
import Main from "../components/Layout/Main/Main";
import Footer from "../components/Layout/Footer/Footer";

// import './globals.scss'

const vazirmatn = localFont({
    src: '../assets/fonts/vazirmatn/Vazirmatn-RD[wght].woff2',
    display: 'swap',
})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}) {
    import('./globals.scss');
    // -----------------------------------------------------------------------------------------------------------------

    return (
        <ContextAppProvider>
        <ContextNavigatorUserAgentProvider>
        <html lang="fa" dir="rtl" data-bs-theme="light">
            <body className={vazirmatn.className}>
            <Header/>
            <Main>{children}</Main>
            <Footer/>
            </body>
        </html>
        </ContextNavigatorUserAgentProvider>
        </ContextAppProvider>
    )
}