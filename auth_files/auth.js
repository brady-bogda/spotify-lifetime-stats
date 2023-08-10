
const { clientId }= process.env;
const { redirectUri } = process.env;

let codeVerifier = generateRandomString(128);

// set authorization request params
generateCodeChallenge(codeVerifier).then(codeChallenge => {
  let state = generateRandomString(16);
  let scope = 'user-read-private user-read-email';

  localStorage.setItem('code_verifier', codeVerifier);

  let args = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge
  });

  window.location = 'https://accounts.spotify.com/authorize?' + args;
});

// make get request to /authorize endpoint
const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');