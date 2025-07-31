import AlbumDetailsHeaderSkeleton from "./AlbumDetailsHeaderSkeleton"
import TrackItemSkeleton from "./TrackItemSkeleton"

const DisplayAlbumSkeleton = () => {
    return (
        <div className="flex flex-col items-center gap-5">
            <AlbumDetailsHeaderSkeleton />
            <div className="flex flex-col gap-2 w-[300px] md:w-[607px] lg:w-[652px]">
                {Array.from({ length: 10 }).map((_, i) => <TrackItemSkeleton key={i} />)}
            </div>
        </div>
    )
}

export default DisplayAlbumSkeleton