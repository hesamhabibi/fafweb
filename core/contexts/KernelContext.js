import {AuthContextProvider} from "./AuthContext";

const KernelContextProvider = ({children}) => {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
};

export default KernelContextProvider;