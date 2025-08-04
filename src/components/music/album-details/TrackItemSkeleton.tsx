
const TrackItemSkeleton = () => {
    return (
        <div className='flex w-full grow-1 justify-between items-center animate-pulse px-4 py-2'>
            <div className="flex gap-2 items-center">
                <div className="bg-[#2a2a2a] rounded w-6 h-6"></div>
                <div className="flex flex-col gap-1">
                    <div className="bg-[#2a2a2a] rounded w-26 h-5 md:w-40 md:h-7"></div>
                    <div className="bg-[#2a2a2a] rounded w-13.5 h-4.5 md:w-25 md:h-6"></div>
                </div>
            </div>
            <div className="bg-[#2a2a2a] rounded w-10 h-5 md:h-6"></div>
        </div>
    )
}

export default TrackItemSkeleton