import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useLocation } from "react-router";
export default function music() {
    const hash = useLocation().hash
    useEffect(() => {
        console.log(hash);
        let token = hash.substring(1).split('&').find(ele => ele.startsWith('access_token'))
        console.log(token);
        console.log(localStorage.getItem('token'));
        var spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(localStorage.getItem('token'));
        spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
            if (err) console.error(err);
            else console.log('Artist albums', data);
        });
        // const fun = (err, data) => {
        //     if(err) console.log('err',err);
        //     else console.log('data',data);
        // }
        // spotifyApi.getTrack("6bDWAcdtVR3WHz2xtiIPUi",
        //     {market: 'JP'},
        //     fun
        // )


        // const music = {
        //     context_uri: "1OojCidx0eoPKch2M0Kz31"
        //     uris?: string[]
        //     offset?: {
        //         position?: number
        //         uri?: string
        //     };
        //     position_ms?: number
        // }
        // spotifyApi.play()
    }, [])
    return (
        <div>
            222
        </div>
    )
}