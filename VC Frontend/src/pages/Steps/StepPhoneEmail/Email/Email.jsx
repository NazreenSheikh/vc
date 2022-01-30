import { useState } from 'react'
import Button from '../../../../Components/Shared/Button/Button'
import Card from '../../../../Components/Shared/Card/Card'
import InputText from '../../../../Components/Shared/InputText/InputText'
import styles from '../StepPhoneEmail.module.css'

const Email = ({ onNext }) => {
    const [email, setEmail] = useState('')

    return (
        <Card title={'Enter Your Email'} icon="email-emoji">
            <InputText
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonWrapper}>
                    <Button text="Next" onClick={onNext} />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your email, you are agreeing to our Terms of
                    Service and Privacy Policy. Thanks :&#41;
                </p>
            </div>
        </Card>
    )
}

export default Email
