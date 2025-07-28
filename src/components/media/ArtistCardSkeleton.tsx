const ArtistCardSkeleton = () => {
    return (
        <div className="flex flex-col grow-1 gap-5 lg:w-1/2 bg-gradient-to-r lg:bg-gradient-to-b from-slate-900 to-slate-700 p-5 animate-pulse">
            <div className="flex gap-5 items-center">
                <div className="bg-slate-700 shrink-0 rounded-full w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]" />
                <div className="bg-slate-700 rounded-lg w-32 h-10 md:w-62 md:h-16 lg:w-95 lg:h-24" />
            </div>
            <div className="flex flex-col gap-1.5 lg:gap-5 bg-gradient-to-r lg:bg-gradient-to-br from-slate-900 to-slate-600 rounded-lg p-5">
                <div className="bg-slate-700 rounded w-full h-5 lg:h-6" />
                <div className="bg-slate-700 rounded w-full h-5 lg:h-6" />
                <div className="bg-slate-700 rounded w-full h-5 lg:h-6" />
            </div>
        </div>
    )
}

export default ArtistCardSkeleton
