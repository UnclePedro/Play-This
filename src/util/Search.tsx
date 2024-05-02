import { getToken } from './Authorize';

let accessToken: any;

const Search = () => {
  const search = async (term: string) => {
    // console.log(term);

    accessToken = await getToken;
    console.log(accessToken);

    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(response);
    const jsonResponse = await response.json();

    console.log(window.location.href);

    if (jsonResponse) {
      console.log(jsonResponse);
      return jsonResponse.tracks.items.map(
        (track: { id: string; name: string; artists: string; album: any; uri: string }) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0],
          album: track.album.name,
          uri: track.uri,
        }),
      );
    }
  };
  return { search };
};

export default Search;
