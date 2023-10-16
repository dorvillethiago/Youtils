'use client'

import Input from "@/src/components/Index/Input/Input"
import DownloadButton from "@/src/components/Index/DownloadButton/DownloadButton";
import Title from "@/src/components/Index/Title/Title";

import styles from "./page.module.scss"

export default function Index() {
  return (
    <div className={styles.container}>
      <Title className={styles.title}/>
      <p style={{opacity: 0.5, marginBottom: '1.5rem'}}>Only youtube links are now available</p>
      <form className={styles.form}>
          <Input className={styles.fieldset}/>
          <DownloadButton className={styles.button} onClick={() => {}}/>
      </form>
    </div>
  );
}
