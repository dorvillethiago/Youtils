import ytdl, { getInfoOptions } from "ytdl-core";

const options = {
  quality: 'highestaudio',
  filter: 'audioonly',
} as getInfoOptions;

export async function POST(request: Request) {
  const requestData = await request.json();
  if (!requestData.url) return new Response('URL is required', { status: 400 });
  if (!isYouTubeUrl(requestData.url)) return new Response('URL is not a YouTube URL', { status: 400 });
  const info = await ytdl.getInfo(requestData.url, options);
  if (parseInt(info.videoDetails.lengthSeconds) > 600) return new Response('Video is too long', { status: 400 });
  try {
    const audio = await ytdl.downloadFromInfo(info, options);
    const audioData = await streamToBase64(audio);
    const mp3Data = atob(audioData);
    const arrayBuffer = new ArrayBuffer(mp3Data.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < mp3Data.length; i++) {
      uint8Array[i] = mp3Data.charCodeAt(i);
    }
    const blob = new Blob([uint8Array], { type: 'audio/mp3' });
    return new Response(blob);
  } catch (err) {
    return new Response(String(err), { status: 500 });
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

const isYouTubeUrl = (url: string): boolean => {
  const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//;
  return pattern.test(url);
};