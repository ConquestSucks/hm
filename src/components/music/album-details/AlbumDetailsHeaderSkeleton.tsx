
const AlbumDetailsHeaderSkeleton = () => {
  return (
    <div className="flex animate-pulse  md:justify-start bg-linear-to-bl from-[#4B4B4B] to-[#232323] p-4 md:rounded-t-xl min-w-[375px] md:min-w-175 lg:min-w-250">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5 md:items-end">
            <div className="rounded-lg p-4 w-[224px] h-[224px] md:w-[187px] md:h-[187px] lg:w-[232px] lg:h-[232px] bg-[#2a2a2a]"></div>
            <div className="flex flex-col items-center gap-2 md:gap-5">
                <div className="rounded w-20 h-5 md:w-20 md:h-5 lg:h-6 bg-[#2a2a2a]"></div>
                <div className="rounded-md w-50 h-10 md:w-100 md:h-15 lg:h-29 bg-[#2a2a2a]"></div>
                <div className="rounded w-25 h-5 md:w-70 md:h-5 lg:h-6 bg-[#2a2a2a]"></div>
            </div>
        </div>
    </div>
  )
}

export default AlbumDetailsHeaderSkeleton