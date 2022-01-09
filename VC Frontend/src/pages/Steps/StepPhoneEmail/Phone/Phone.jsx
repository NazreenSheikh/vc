import { useState } from "react"
import Card from "../../../../Components/Shared/Card/Card"
import InputText from "../../../../Components/Shared/InputText/InputText"
import styles from "../StepPhoneEmail.module.css"
import Button from "../../../../Components/Shared/Button/Button"

const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('')

    const onSubmit = async () => {
        onNext()
    }

    return (
        <Card title={"Enter Your Phone Number"} icon="phone">
            <InputText
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength={13}
            />
            <div>
                <div className={styles.actionButtonWrapper}>
                    <Button text="Next" onClick={onSubmit} />
                </div>
                <p className={styles.bottomParagraph}>By entering your number, you are agreeing to our Terms of Service and Privacy Policy. Thanks :&#41;</p>
            </div>
        </Card>
    )
}

export default Phone
