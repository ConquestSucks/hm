const AlbumCardSkeleton = () => {
    return (
        <div className='flex flex-col gap-1 items-center rounded-lg p-4 w-[256px] h-[308px] md:w-[204px] md:h-[256px] animate-pulse bg-[#121212]'>
            <div className='w-[232px] h-[232px] rounded-md md:w-[180px] md:h-[180px] md:rounded-lg bg-[#2a2a2a]' />
            <div className='flex flex-col gap-1 w-full mt-2'>
                <div className='h-4 w-3/4 bg-[#2a2a2a] rounded' />
                <div className='flex gap-2'>
                    <div className='h-3 w-1/4 bg-[#2a2a2a] rounded' />
                    <div className='h-3 w-1/4 bg-[#2a2a2a] rounded' />
                </div>
            </div>
        </div>
    )
}

export default AlbumCardSkeleton
