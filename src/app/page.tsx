'use client'

import { useRouter } from 'next/navigation'
import { getYoutubeVideoId } from '../utils/utils';
import DownloadButton from "@components/Index/DownloadButton";
import Input from "@components/Index/Input";
import Title from "@components/Index/Title";

import styles from "@/src/styles/components/Index/page.module.scss"

export default function Index() {

  const router = useRouter()

  function getInputValue() {
    const inputElement = document.getElementById("video-input") as HTMLInputElement;
    const inputValue = inputElement.value;
    if (!inputValue) throw new Error("Input value is empty");
    return inputValue;
  }

  function redirectToDownloadPage() {
    try {
      const inputValue = getInputValue();
      const youtubeId = getYoutubeVideoId(inputValue);
      router.push(`/video/${youtubeId}`)
    } catch (e) {
      alert("The provided link is not a valid youtube link")
      return
    }
  }

  return (
    <div className={styles.container}>
      <Title className={styles.title}/>
      <p className={styles.warning}>Only youtube links are now available</p>
      <form className={styles.form}>
          <Input className={styles.fieldset}/>
          <DownloadButton className={styles.button} 
            onClick={() => redirectToDownloadPage()}/>
      </form>
    </div>
  );
}
