import type React from "react"
import type { FullAlbumObject } from "../../../types/spotify"

interface AlbumDetailsHeaderProps {
    album: FullAlbumObject
}

const AlbumDetailsHeader: React.FC<AlbumDetailsHeaderProps> = ({ album }) => {
    return (
        <div className="flex justify-center md:justify-start bg-linear-to-bl from-[#4B4B4B] to-[#232323] w-full p-4 md:rounded-t-xl min-w-[375px] md:max-w-fit md:min-w-175 lg:min-w-250">
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-7 md:items-end">
                <img src={album.images[0].url} className="rounded-lg w-[224px] h-[224px] md:w-[187px] md:h-[187px] lg:w-[232px] lg:h-[232px]"></img>
                <div className="flex flex-col items-center md:items-start">
                    <span className="rounded font-medium">{album.album_type}</span>
                    <span className="rounded-md font-extrabold text-2xl md:text-5xl lg:text-8xl">{album.name}</span>
                    <div className="rounded text-md mt-5">
                        {album.artists.map((artist)=> <span className="font-bold">{artist.name} • </span>)}
                        <span className="text-gray-300">{album.release_date.slice(0,4)} • </span>
                        <span>{album.total_tracks} track(s)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumDetailsHeader