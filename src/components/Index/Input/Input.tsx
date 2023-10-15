import styles from "./Input.module.scss"

export default function Input() {
    return (
        <fieldset className={styles.fieldset}>
            <input className={styles.input} placeholder="https://www.youtube.com/watch?v=oqUzrEVkR14"/>
        </fieldset>
    )
}