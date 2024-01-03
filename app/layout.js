import {ContextAppProvider} from "../contexts/ContextApp";
import {ContextNavigatorUserAgentProvider} from "../contexts/ContextNavigatorUserAgent";
import {ContextIsMobileProvider} from "../contexts/ContextIsMobile";
import Layout from "../components/Layout/Layout";
import KernelContextProvider from "@core/contexts/KernelContext";

export default function RootLayout({children, params}) {

  // -----------------------------------------------------------------------------------------------------------------

  return (
    <KernelContextProvider>
      <ContextAppProvider>
        <ContextNavigatorUserAgentProvider>
          <ContextIsMobileProvider>
            <Layout>
              {children}
            </Layout>
          </ContextIsMobileProvider>
        </ContextNavigatorUserAgentProvider>
      </ContextAppProvider>
    </KernelContextProvider>
  )
}