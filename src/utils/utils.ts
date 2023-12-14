export function getYoutubeVideoId(url: string) {
  const urlObj = new URL(url);
  return urlObj.searchParams.get("v");
}