interface ImageObject {
    url: string;
    height: number | null;
    width: number | null;
}

interface ExternalUrls {
    spotify: string;
}

interface SimplifiedArtistObject {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: "artist";
    uri: string;
}

interface Restrictions {
    reason: string;
}

export interface SimplifiedAlbumObject {
    album_type: "album" | "single" | "compilation";
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: ImageObject[];
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    restrictions?: Restrictions;
    type: "album";
    uri: string;
    artists: SimplifiedArtistObject[];
    album_group?: "album" | "single" | "compilation" | "appears_on";
}

export interface SpotifyAlbumsResponse {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: SimplifiedAlbumObject[];

}

interface TrackCopyright {
    text: string;
    type: string;
}

interface ExternalIds {
    isrc?: string;
    ean?: string;
    upc?: string;
}

export interface SimplifiedTrackObject {
    artists: SimplifiedArtistObject[];
    available_markets?: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_playable?: boolean;
    /*   linked_from?: any; // можно типизировать, если надо */
    restrictions?: Restrictions;
    name: string;
    preview_url?: string | null;
    track_number: number;
    type: "track";
    uri: string;
    is_local: boolean;
}

interface AlbumTrackObject {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: SimplifiedTrackObject[];
}

export interface FullAlbumObject extends SimplifiedAlbumObject {
    copyrights: TrackCopyright[];
    external_ids: ExternalIds;
    genres: string[];
    label: string;
    popularity: number;
    tracks: AlbumTrackObject;
}
