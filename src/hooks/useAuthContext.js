import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
export const useAuthcontext = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("AuthContext is not available");
    }
    return context;
}