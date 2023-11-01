import Thubnail from "@components/Download/Thumbnail";
import Title from "@components/Download/Title";
import Timer from "@components/Download/Timer";
import Button from "@components/Download/Button";

import styles from "@styles/components/Download/DownloadPage.module.scss"


export default function Page () {
    return(
        <div className={styles.container}>
            <Thubnail src={"/thumbnail.svg"}/>
            <div className={styles.organizeThumbnail}>
                <Title/>
                <Timer/>
                <Button format="mp3"/>
            </div>
        </div>
    );
}