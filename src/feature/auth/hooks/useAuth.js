import { useContext , useEffect} from 'react'
import { AuthContext } from '../auth.context'
import { login, register, logout, getMe } from '../services/auth.api'

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, loading, setUser, setLoading } = context

    const handleLogin = async (email, password) => {
        setLoading(true)
        try{
            const data = await login(email, password)
        setUser(data.user)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
        
    }

    const handleRegister = async (username, email, password) => {
        setLoading(true)
        try{
            const data = await register(username, email, password)
            setUser(data.user)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try{
            await logout()
            setUser(null)
        }catch(err){
            console.log(err)
        }finally{   
        setLoading(false)
    }}

    const handleGetMe = async () => {
        setLoading(true)
        try{
            const data = await getMe()
            setUser(data.user)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }


    useEffect(() => {
        const getandSetUser = async () => {
            try {
                const data = await getMe()
                setUser(data?.user ?? null)
            } catch (err) {
                console.error(err)
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        getandSetUser()
    }, [])

    return { user, loading, handleLogin, handleRegister, handleLogout, handleGetMe }
}

