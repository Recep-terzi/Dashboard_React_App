import {useState} from 'react'
import {auth} from '../firebase/config'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { useAuthcontext } from './useAuthContext'


export const useSignUp = () => {
    const {dispatch} = useAuthcontext()
    const [error,setError] = useState(null)
    const [loading,setLoading ] = useState(false)
    const signup = async (email,password,displayName) => {
        setError(null)
        setLoading(true)
        try {
            const res = await createUserWithEmailAndPassword(auth,email,password)
            if (!res) {
                throw new Error('Üye işleminde hata oluştu')
            }  
            await updateProfile(res.user,{displayName})
            dispatch({type:'LOGIN',payload:res.user})
            setLoading(false)
            setError(null)
        } catch (error) {
            console.log(error.message);
            setError(error.message)
            setLoading(false)
        }
    }
    return {signup,error,loading}
}