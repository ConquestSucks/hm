import axios from 'axios'
import type { SpotifyAlbumsResponse } from '../types/spotify'

export const getArtistAlbums = async (spotifyId: string) => {
    try {
        return (await axios.get<SpotifyAlbumsResponse>(`https://viperr-serverless.vercel.app/api/artist/?id=${spotifyId}`)).data
    } catch (error) {
        throw Error(`message: ${error}`)
    }
}

