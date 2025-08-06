import AlbumDetailsHeaderSkeleton from "./AlbumDetailsHeaderSkeleton"
import TrackItemSkeleton from "./TrackItemSkeleton"

const DisplayAlbumSkeleton = () => {
    return (
        <div className="flex flex-col items-center w-full md:w-fit">
            <AlbumDetailsHeaderSkeleton />
            <div className="flex flex-col gap-2 w-full bg-linear-to-tr from-[#232323] to-[#121212]">
                {Array.from({ length: 10 }).map((_, i) => <TrackItemSkeleton key={i} />)}
            </div>
        </div>
    )
}

export default DisplayAlbumSkeleton