import type { FullAlbumObject } from "../../../types/spotify"
import AlbumDetailsHeader from "./AlbumDetailsHeader"
import TrackItem from "./TrackItem"

interface DisplayAlbumProps {
    album: FullAlbumObject
}

const DisplayAlbum: React.FC<DisplayAlbumProps> = ({album}) => {
    return (
        <div className="flex flex-col items-center lg:items-start">
            <AlbumDetailsHeader album={album}/>
            <div className="flex flex-col gap-2 w-full bg-linear-to-br from-[#232323] to-[#121212] md:rounded-b-xl p-4 grow-1 md:grow-0">
                {album.tracks.items.map((track, i) => <TrackItem key={i} track={track} />)}
            </div>
        </div>
    )
}

export default DisplayAlbum