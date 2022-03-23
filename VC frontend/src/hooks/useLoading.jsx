import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setAuth } from '../store/authSlice'

export const useLoading = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        ;(async () => {
            try {
                const { data } = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/refresh`,
                    { withCredentials: true }
                )
                dispatch(setAuth(data))
                setLoading(false)
            } catch (err) {
                setLoading(false)
                console.log(err)
            }
        })()
    }, [])

    return { loading }
}
