import AlbumCardSkeleton from '../../components/music/AlbumCardSkeleton'
import YearHeaderSkeleton from '../../components/music/YearHeaderSkeleton'

const MusicSkeleton = () => {
    return (
        <div className="flex flex-col items-center h-full">
            <div className="flex flex-col w-fit">
                <YearHeaderSkeleton />
                <div className="gap-3 w-fit justify-center grid grid-cols-1 md:grid-cols-4 md:gap-3">
                    {Array.from({ length: 8 }).map((_, i) => <AlbumCardSkeleton key={i} />)}

                </div>
            </div>
        </div>

    )
}

export default MusicSkeleton