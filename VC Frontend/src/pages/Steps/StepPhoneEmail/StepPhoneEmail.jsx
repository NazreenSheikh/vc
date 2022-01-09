import { useState } from 'react';
import Email from "./Email/Email"
import Phone from "./Phone/Phone"
import styles from "./StepPhoneEmail.module.css"

const Steps = {
    "phone": Phone,
    "email": Email
}

const StepPhoneEmail = ({ onNext }) => {

    const [step, setStep] = useState("phone")
    const Step = Steps[step]

    return (
        <div className={styles.cardWrapper}>
            <div>
                <div className={styles.buttonWrapper}>
                    <button
                        className={`${styles.tabButton} ${step === "phone" ? styles.active : ''}`}
                        onClick={() => setStep("phone")}
                    >
                        <img src="/images/phone-white.png" alt="phone" />
                    </button>
                    <button
                        className={`${styles.tabButton} ${step === "email" ? styles.active : ''}`}
                        onClick={() => setStep("email")}
                    >
                        <img src="/images/mail-white.png" alt="email" />
                    </button>
                </div>
                <Step onNext={onNext} />
            </div>
        </div>
    )
}

export default StepPhoneEmail
