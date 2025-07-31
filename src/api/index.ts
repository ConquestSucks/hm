import axios from 'axios'
import type { SpotifyAlbumsResponse, FullAlbumObject } from '../types/spotify'

export const getArtistAlbums = async (spotifyId: string) => {
    try {
        return (await axios.get<SpotifyAlbumsResponse>(`https://viperr-serverless.vercel.app/api/getArtistAlbums/?id=${spotifyId}`)).data
    } catch (error) {
        throw Error(`message: ${error}`)
    }
}

export const getAlbum = async (spotifyId: string) => {
    try {
        return (await axios.get<FullAlbumObject>(`https://viperr-serverless.vercel.app/api/getAlbum/?id=${spotifyId}`)).data
    } catch (error) {
        throw Error(`message: ${error}`)
    }
}

