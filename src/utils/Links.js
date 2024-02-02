const API_KEY="AIzaSyCH9Ec1irS24MLkc4n1PSrEqLZ5KCkjt80";

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key="+API_KEY;
export const VIDEO_DATA = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+API_KEY+"&id="
export const YOUTUBE_SEARCHSUGGESTIONS_API= "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="