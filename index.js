require('dotenv').config()

const SpotifyWebApi = require('spotify-web-api-node')
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET


// {
//   method: "POST",
//     url: "https://accounts.spotify.com/api/token",
//   data: {
//   "grant_type":    "authorization_code",
//     "code":          code,
//     "redirect_uri":  'http://localhost:3000/callback',
//     "client_secret": clientSecret,
//     "client_id":     clientId,
// },
//   success: function(result) {
//     // handle result...
//   },
// }

// credentials are optional
const spotify = new SpotifyWebApi({
  clientId,
  clientSecret,
  // redirectUri : 'http://localhost/callback'
})

spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(console.log)
  .catch(console.error)