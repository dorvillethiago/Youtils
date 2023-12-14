import { Video } from "@/src/app/video/[id]/page";
import Image from "next/image";
import styles from "@/src/styles/components/Video/InformationSection.module.scss"

export default function InformationSection({thumbnail, title, duration}: Video) {

    function convertSecondsToMinutesAndSeconds(input: string) {
        const totalSeconds = parseInt(input);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        return formattedTime;
      }

    return (
        <div className={styles.container}>
            <Image className={styles.image} width={640} height={360} src={thumbnail} alt={title}/>
            <div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.timestamp}>{convertSecondsToMinutesAndSeconds(duration)}</p>
            </div>
        </div>
    )
}