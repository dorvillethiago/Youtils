import Image from "next/image";
import styles from "./DownloadButton.module.scss"

interface DownloadButtonProps {
    onClick: () => void;
}

export default function DownloadButton({onClick}: DownloadButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            <Image width={37} height={37} src="/download-icon.svg" alt="Download icone"/>
        </button>
    )
}