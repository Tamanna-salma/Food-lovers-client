import { use } from "react";
import { AuthContext } from "../../AuthContexts/AuthProvider";


const UseAuth = () => {
    const authInfo=use(AuthContext);
  return authInfo;
}

export default UseAuth;

