import { useContext } from "react";
import { AuthContex } from "../providers/AuthProvider";


const useAuth = () => {
    const all = useContext(AuthContex)
    return all;
    
};

export default useAuth;