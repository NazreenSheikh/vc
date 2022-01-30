import { useState } from 'react'
import Card from '../../../../Components/Shared/Card/Card'
import InputText from '../../../../Components/Shared/InputText/InputText'
import styles from '../StepPhoneEmail.module.css'
import Button from '../../../../Components/Shared/Button/Button'
import { toast } from 'react-toastify'
import { sendOtp } from '../../../../http'
import { useDispatch } from 'react-redux'
import { setOtp } from '../../../../store/authSlice'

const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const dispatch = useDispatch()

    const onSubmit = async () => {
        if (!phoneNumber) {
            return toast.error('Phone number is required')
        }
        try {
            const { data } = await sendOtp({ phone: phoneNumber })
            dispatch(setOtp({ phone: data.phone, hash: data.hash }))
            onNext()
        } catch (err) {
            return toast.error(err.response.data.message)
        }
    }
    return (
        <Card title={'Enter Your Phone Number'} icon="phone">
            <InputText
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength={15}
            />
            <div>
                <div className={styles.actionButtonWrapper}>
                    <Button text="Next" onClick={onSubmit} />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you are agreeing to our Terms of
                    Service and Privacy Policy. Thanks :&#41;
                </p>
            </div>
        </Card>
    )
}

export default Phone
