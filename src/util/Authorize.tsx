const SPOTIFY_CLIENT_ID = '17b12d160569489584b96ea99cc989cb';
const redirectUri = 'http://localhost:5173/auth/callback';

function generateRandomString(length: number) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const codeVerifier = generateRandomString(128);

// const sha256 = async (plain: string) => {
//   const encoder = new TextEncoder();
//   const data = encoder.encode(plain);
//   return window.crypto.subtle.digest('SHA-256', data);
// };

// const base64encode = (input: any) => {
//   return btoa(String.fromCharCode(...new Uint8Array(input)))
//     .replace(/=/g, '')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_');
// };

// const hashed = await sha256(codeVerifier);
// const generateCodeChallenge = base64encode(hashed);

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

export const authorize = async () => {
  generateCodeChallenge(codeVerifier).then((codeChallenge: any) => {
    const state = generateRandomString(16);
    const scope = 'user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state';

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
const code: any = urlParams.get('code');

// console.log(code);

// export const getToken = async (code: string) => {
//   const codeVerifier = sessionStorage.getItem('code_verifier');

//   const body = new URLSearchParams({
//     grant_type: 'authorization_code' || '',
//     code: code || '',
//     redirect_uri: redirectUri || '',
//     client_id: SPOTIFY_CLIENT_ID || '',
//     code_verifier: codeVerifier || '',
//   });
//   try {
//     const response = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: body,
//     });

//     console.log(response.json);
//     return response.json();
//   } catch (error) {
//     window.location.href = '/';
//   }
// };

export const getToken = async () => {
  const codeVerifier = sessionStorage.getItem('code_verifier');

  const authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: SPOTIFY_CLIENT_ID,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier || '',
    }),
  };

  const body = await fetch('https://accounts.spotify.com/api/token', authParameters);
  const response = await body.json();
  console.log(response);

  localStorage.setItem('access_token', response.access_token);
};

// // trying to save token to a variable
// export const saveToken = async (code: string) => {
//   try {
//     const tokenResponse = await getToken(code);
//     const accessToken = tokenResponse.access_token;
//     sessionStorage.setItem('access_token', accessToken);
//     return true;
//   } catch (error) {
//     console.error('Error getting token:', error);
//     return false;
//     // Handle error
//   }
// };

export const refreshSpotifyToken = async (refresh_token: string) => {
  const body = new URLSearchParams({
    grant_type: 'refresh_token' || '',
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
