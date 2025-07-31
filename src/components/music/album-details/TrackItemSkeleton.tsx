
const TrackItemSkeleton = () => {
    return (
        <div className='flex w-full justify-between items-center animate-pulse'>
            <div className="flex gap-2 items-center">
                <div className="bg-[#2a2a2a] rounded w-5 h-5 md:w-4 md:h-4"></div>
                <div className="flex flex-col gap-1">
                    <div className="bg-[#2a2a2a] rounded w-26 h-5 md:w-25 md:h-4"></div>
                    <div className="bg-[#2a2a2a] rounded w-13.5 h-4.5 md:w-12.5 md:h-3.5"></div>
                </div>
            </div>
            <div className="bg-[#2a2a2a] rounded w-12 h-5 md:w-11 md:h-4"></div>
        </div>
    )
}

export default TrackItemSkeleton