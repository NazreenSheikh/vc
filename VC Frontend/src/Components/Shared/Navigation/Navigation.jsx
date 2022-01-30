import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { logout } from '../../../http'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
import { toast } from 'react-toastify'

const Navigation = () => {
    const dispatch = useDispatch()
    const { isAuth } = useSelector((state) => state.auth)

    const logOut = async () => {
        try {
            const { data } = await logout()
            dispatch(setAuth(data))
        } catch (err) {
            return toast.error(err.message)
        }
    }

    return (
        <nav className={`${styles.navbar} container`}>
            <Link className={styles.brandLogo} to="/">
                <img src="/images/logo.png" alt="logo" />
                <span className={styles.logoText}>VoiceClub</span>
            </Link>
            {isAuth && <button onClick={logOut}>Logout</button>}
        </nav>
    )
}

export default Navigation
