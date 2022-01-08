import styles from "./InputText.module.css"

const InputText = ({ ...rest }) => {
    return (
        <div>
            <input className={styles.input} type="text" {...rest} />
        </div>
    )
}

export default InputText
