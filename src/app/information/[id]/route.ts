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

  let videoInfo = await ytdl.getInfo(youtubeVideoUrl, options);

  if (isVideoLongerThan10Minutes(videoInfo.videoDetails.lengthSeconds)) return new Response('Video is too long', { status: 400 });

  return new Response(JSON.stringify({
    id: context.params.id,
    title: videoInfo.videoDetails.title,
    thumbnail: videoInfo.videoDetails.thumbnails[videoInfo.videoDetails.thumbnails.length-1].url,
    duration: videoInfo.videoDetails.lengthSeconds,
  }), { status: 200 })
}

function isVideoLongerThan10Minutes(lengthSeconds: string) {
  return parseInt(lengthSeconds) > 600;
}

async function isVideoValid(url: string) {
  try {
    const info = await ytdl.getInfo(url, options);
    return true;
  } catch (err) {
    return false;
  }
}