import {useState} from 'react'
import {auth} from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthcontext } from './useAuthContext'


export const useLogin = () => {
    const {dispatch} = useAuthcontext()
    const [error,setError] = useState(null)
    const [loading,setLoading ] = useState(false)
    const login = async (email,password) => {
        setError(null)
        setLoading(true)
        try {
            const res = await signInWithEmailAndPassword(auth,email,password)
            if (!res) {
                throw new Error('Giriş işleminde hata oluştu')
            }  
            
            dispatch({type:'LOGIN',payload:res.user})
            setLoading(false)
            setError(null)
        } catch (error) {
            console.log(error.message);
            setError(error.message)
            setLoading(false)
        }
    }
    return {login,error,loading}
}