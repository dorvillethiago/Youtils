import styles from "@/src/styles/components/Video/DownloadButton.module.scss"

interface Props {
    type: string;
    onClick: () => void;
}

export default function DownloadButton({type, onClick}: Props) {
    return(
        <button className={styles.button} onClick={onClick}>Download {type}</button>
    )
}