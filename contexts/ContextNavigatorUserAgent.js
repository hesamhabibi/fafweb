"use client"

import {createContext} from 'react';

import useNavigatorUserAgent from "../hooks/useNavigatorUserAgent";

export const ContextNavigatorUserAgent = createContext(null);

export default ContextNavigatorUserAgent;

export function ContextNavigatorUserAgentProvider({children}) {

    const navigatorUserAgent = useNavigatorUserAgent()

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <ContextNavigatorUserAgent.Provider value={navigatorUserAgent}>{children}</ContextNavigatorUserAgent.Provider>
    )
}