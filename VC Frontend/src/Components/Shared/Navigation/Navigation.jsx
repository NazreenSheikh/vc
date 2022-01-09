import styles from './Navigation.module.css'
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <nav className={`${styles.navbar} container`}>
            <Link className={styles.brandLogo} to='/'>
                <img src="/images/logo.png" alt="logo" />
                <span className={styles.logoText}>VoiceClub</span>
            </Link>
        </nav>
    )
}

export default Navigation
