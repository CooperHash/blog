export const CLIENT_ID = '6f6495a91be44f568754a20b1999722c'; // Your client id
export const CLIENT_SECRET = '93e413e2f96c430f8a181e976a0f16f2'; // Your secret
export const REDIRECT_URI = 'http://127.0.0.1:5173/music'; // Your redirect uri
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
export const RESPONSE_TYPE = "token"
export const SCOPE = "streaming \
               user-read-email \
               user-read-private"

const generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
export const STATE = generateRandomString(16);
// export const scopes = 'user-read-private user-read-email'