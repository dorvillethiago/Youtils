import ytdl, { getInfoOptions } from "ytdl-core";

const getYoutubeUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

const options = {
  quality: 'highestaudio',
  filter: 'audioonly',
} as getInfoOptions;

interface requestData { 
  id: string;
}

export async function GET(request: Request, context: { params: requestData }) { 
  const youtubeVideoUrl = getYoutubeUrl(context.params.id);
  const checked = await isVideoValid(youtubeVideoUrl)
  if (!checked) {return new Response('Video is unavailable', { status: 400 });}

  const videoInfo = await ytdl.getInfo(youtubeVideoUrl, options);
  if (isVideoLongerThan10Minutes(videoInfo.videoDetails.lengthSeconds)) return new Response('Video is too long', { status: 400 });

  try {
    const song = await getBlobFromYtdlInfo(videoInfo);
    return new Response(song);
  } catch (err) {
    return new Response("Internal api error", { status: 500 });
  }
}

function isVideoLongerThan10Minutes(lengthSeconds: string) {
  return parseInt(lengthSeconds) > 600;
}

async function getBlobFromYtdlInfo(info: ytdl.videoInfo) {
  const audio = await ytdl.downloadFromInfo(info, options);
  const audioData = await streamToBase64(audio);
  const mp3Data = atob(audioData);
  const arrayBuffer = new ArrayBuffer(mp3Data.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < mp3Data.length; i++) {
    uint8Array[i] = mp3Data.charCodeAt(i);
  }
  return new Blob([uint8Array], { type: 'audio/mp3' });
}

async function isVideoValid(url: string) {
  try {
    const info = await ytdl.getInfo(url, options);
    return true;
  } catch (err) {
    return false;
  }
}

async function streamToBase64(stream: any): Promise<string> {
  const chunks: any[] = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk: any) => {
      chunks.push(chunk);
    });
    stream.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const base64 = buffer.toString('base64');
      resolve(base64);
    });
    stream.on('error', (err: any) => {
      reject(err);
    });
  });
}