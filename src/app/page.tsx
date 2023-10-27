'use client'

import DownloadButton from "@components/Index/DownloadButton";
import Input from "@components/Index/Input";
import Title from "@components/Index/Title";

import styles from "@/src/styles/components/Index/page.module.scss"

export default function Index() {
  return (
    <div className={styles.container}>
      <Title className={styles.title}/>
      <p className={styles.warning}>Only youtube links are now available</p>
      <form className={styles.form}>
          <Input className={styles.fieldset}/>
          <DownloadButton className={styles.button} onClick={() => {}}/>
      </form>
    </div>
  );
}
