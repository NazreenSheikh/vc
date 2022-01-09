import { useState } from 'react';
import Button from '../../../Components/Shared/Button/Button';
import Card from '../../../Components/Shared/Card/Card';
import InputText from '../../../Components/Shared/InputText/InputText';

import styles from './StepOTP.module.css'

const StepOTP = () => {
    const [otp, setOtp] = useState('')

    return (
        <div className={styles.cardWrapper}>
            <Card title={"Enter OTP we just sent you"} icon="lock-emoji">
                <InputText
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOtp(value)}
                    maxLength={4}
                />
                <div>
                    <div className={styles.actionButtonWrapper}>
                        <Button text="Send" />
                    </div>
                    <p className={styles.bottomParagraph}>
                        By entering OTP, you are agreeing to our Terms of Service and Privacy Policy. Thanks :&#41;
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default StepOTP
