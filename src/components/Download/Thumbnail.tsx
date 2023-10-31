import Image from "next/image";
import styles from"@styles/components/Download/Thumbnail.module.scss"

interface ThumbnailProps {
    src : string
    className ?: string
}

export default function Thumbnail({src, className}:ThumbnailProps ) {
    return(
        <div className={className}>
            <Image
            src={src}
            alt="Thumbnail"
            width={582}
            height={387}
            className={styles.thumbnail}
            /> 
        </div>
    );
}
