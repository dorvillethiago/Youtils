'use client'
import Loader from "@/src/components/Layout/Loader"
import styles from "@/src/styles/components/Video/page.module.scss"
import InformationSection from "@/src/components/Video/InformationSection"
import axios from "axios"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import DownloadButton from "@/src/components/Video/DownloadButton"

export type Video = {
  id: string
  thumbnail: string
  title: string
  duration: string
}

export default function Page({ params }: { params: { id: string } }) {

  const [video, setVideo] = useState<Video | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const videoInformation = await axios.get(`/information/${params.id}`)
      setVideo(videoInformation.data)
    };
    fetchData();
  }, []);

  async function downloadSong(id: string, title: string) {
    try {
      toast.info('Downloading...')
      const response = await axios.get(`/download/${id}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(response.data);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title}.mp3`;
      a.click();
      window.URL.revokeObjectURL(url);
      toast.dismiss()
      toast.success('Downloaded')
    } catch (error) {
      toast.error('An error occured')
    }
  }


  return (
    <div className={styles.container}>
      {!video && <div style={{marginTop: 150}}><Loader /></div>}
      {video &&
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px'}}>
        <InformationSection {...video}/>
        <DownloadButton type="mp3" onClick={() => downloadSong(video.id, video.title)}/>
      </div>
      }
    </div>
  )
}
