const SPOTIFY_CLIENT_ID = '17b12d160569489584b96ea99cc989cb';
const redirectUri = 'http://localhost:5173/auth/callback';
// 'https://play-this-app.vercel.app'
// 'http://localhost:5173/auth/callback'

function generateRandomString(length: number) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const codeVerifier = generateRandomString(128);

async function generateCodeChallenge(codeVerifier: string): Promise<string> {
  function base64encode(string: Uint8Array): string {
    return btoa(String.fromCharCode.apply(null, Array.from(string)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return base64encode(new Uint8Array(digest));
}

export const authorize = () => {
  generateCodeChallenge(codeVerifier).then((codeChallenge: string) => {
    const state = generateRandomString(16);
    const scope = 'playlist-modify-private playlist-modify-public';

    sessionStorage.setItem('code_verifier', codeVerifier);

    const args = new URLSearchParams({
      client_id: SPOTIFY_CLIENT_ID,
      response_type: 'code',
      redirect_uri: redirectUri,
      scope: scope,
      state: state,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    });

    window.location.href = 'https://accounts.spotify.com/authorize?' + args;
  });
};

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

export const getToken = async () => {
  // need this to return access token if one already exists
  if (sessionStorage.getItem('access_token')) return;
  const codeVerifier = sessionStorage.getItem('code_verifier');

  const authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: SPOTIFY_CLIENT_ID,
      grant_type: 'authorization_code',
      code: code || '',
      redirect_uri: redirectUri,
      code_verifier: codeVerifier || '',
    }),
  };

  const body = await fetch('https://accounts.spotify.com/api/token', authParameters);
  const response = await body.json();
  console.log(response);

  sessionStorage.setItem('access_token', response.access_token);
};

export const refreshSpotifyToken = async (refresh_token: string) => {
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refresh_token,
    client_id: SPOTIFY_CLIENT_ID || '',
  });
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    });

    return response.json();
  } catch (err) {
    console.log(err);
  }
};
