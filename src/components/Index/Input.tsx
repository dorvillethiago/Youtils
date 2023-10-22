import styles from "@styles/components/Index/Input.module.scss"

interface InputProps {
    className?: string;
}

export default function Input({className}: InputProps) {
    return (
        <fieldset className={className}>
            <input className={styles.input} placeholder="https://www.youtube.com/watch?v=oqUzrEVkR14"/>
        </fieldset>
    )
}