import type { SimplifiedAlbumObject } from "../../types/spotify"
import AlbumCard from "./AlbumCard"

interface DisplayAlbumsProps {
    albums: SimplifiedAlbumObject[]
}

const DisplayAlbums: React.FC<DisplayAlbumsProps> = ({ albums }) => {
    const albumsByYear: Record<string, SimplifiedAlbumObject[]> = {}

    if (albums) {
        for (const album of albums) {
            const year = album.release_date.slice(0, 4)

            if (!albumsByYear[year]) albumsByYear[year] = []
            albumsByYear[year].push(album)
        }
    }

    return (
        <div className="flex flex-col items-center">
            {Object.entries(albumsByYear)
                .sort((a, b) => +b[0] - +a[0])
                .map(([year, arr]) => (
                    <div key={year} className="flex flex-col w-fit">
                        <div className="flex flex-col p-4 gap-2">
                            <h2 className="text-5xl w-fit font-viperr font-extralight">{year}</h2>
                            <div className="w-full h-[1px] bg-white"></div>
                        </div>
                        <div className='gap-3 w-fit justify-center grid grid-cols-1 md:grid-cols-4 md:gap-3'>
                            {arr
                                .sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime())
                                .map((album) => <AlbumCard key={album.id} item={album} />)}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default DisplayAlbums