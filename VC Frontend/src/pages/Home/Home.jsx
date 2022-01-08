import styles from './Home.module.css'
import { Link, useNavigate } from "react-router-dom";
import Button from '../../Components/Shared/Button/Button';
import Card from '../../Components/Shared/Card/Card';

const Home = () => {
    const navigate = useNavigate()

    const StartReg = () => {
        navigate('/authenticate')
    }

    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to VoiceClub" icon="logo">
                <p className={styles.text}>
                    We’re working hard to get VoiceClub ready for everyone!
                    While we wrap up the finishing youches, we’re adding people
                    gradually to make sure nothing breaks
                </p>
                <div >
                    <Button text="Get your username" onClick={StartReg} />
                </div>
                <div className={styles.signInWrapper} >
                    <span className={styles.hasInvite}>Have an invite text?</span>
                    <Link to='/login' className={styles.signInLink}>
                        SignIn
                    </Link>
                </div>
            </Card>
        </div>
    )
}

export default Home
