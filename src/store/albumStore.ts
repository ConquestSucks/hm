import { makeAutoObservable } from "mobx";
import type { FullAlbumObject, SimplifiedAlbumObject } from "../types/spotify";
import { getAlbum, getArtistAlbums } from "../api";
import { kai, mice } from "../constants/artistId";

class AlbumStore {
    private _albums: SimplifiedAlbumObject[] = []
    private _currentAlbum: FullAlbumObject | null = null
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    set currentAlbum(currentAlbum: FullAlbumObject | null) {
        this._currentAlbum = currentAlbum;
    }

    get currentAlbum() {
        return this._currentAlbum;
    }

    set albums(albums: SimplifiedAlbumObject[]) {
        this._albums = albums
    }

    get albums() {
        return this._albums;
    }

    setLoading(value: boolean) {
        this.isLoading = value
    }

    async fetchAlbums() {
        if (this.isLoading || this.albums.length > 0) return;

        this.setLoading(true)

        try {
            const kaiAlbums = await getArtistAlbums(kai);
            const miceAlbums = await getArtistAlbums(mice)
            const albums = [
                ...kaiAlbums.items,
                ...miceAlbums.items
            ]

            const filteredAlbums = albums.filter((album, index, self) => index === self.findIndex((item) => item.name === album.name)) // delete duplicate

            this.albums = filteredAlbums
        } catch (error) {
            console.error('Error fetching albums:', error)
        } finally {
            this.setLoading(false)
        }
    };

    async fetchAlbum(spotifyId: string) {
        try {
            this.setLoading(true)
            const fullAlbom = await getAlbum(spotifyId)
            this.currentAlbum = fullAlbom
        } catch (error) {
            console.error(error)
        } finally {
            this.setLoading(false)
        }
    }
}

export const albumStore = new AlbumStore();