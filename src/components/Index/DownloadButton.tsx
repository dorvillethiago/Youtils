import Image from "next/image";
import styles from "@styles/components/Index/DownloadButton.module.scss"

interface DownloadButtonProps {
    onClick: () => void;
    className?: string;
}

export default function DownloadButton({onClick, className}: DownloadButtonProps) {
    return (
        <div className={className}>
            <button className={styles.button} onClick={onClick} type="submit">
                <Image width={37} height={37} src="/download-icon.svg" alt="Download icone"/>
            </button>
        </div>
    )
}