import React from 'react'
import type { SimplifiedAlbumObject } from '../../types/spotify'
import { Link } from 'react-router-dom'

interface AlbumCardProps {
    item: SimplifiedAlbumObject
}

const AlbumCard: React.FC<AlbumCardProps> = ({ item }) => {
    return (
        <Link
            to={item.id}
            className='flex flex-col gap-1 items-center rounded-lg p-4 w-[256px] h-[308px] md:w-[204px] md:h-[256px] cursor-pointer transition-all hover:bg-[#1E1E1E] active:bg-[#1E1E1E]'
        >
            <img src={item.images[0].url} alt='album image' className='w-[232px] h-[232px] rounded-md md:w-[180px] md:h-[180px] md:rounded-lg' />
            <div className='flex flex-col gap-1 w-full'>
                <span className='text-md font-medium hover:underline'>{item.name}</span>
                <div className='flex gap-1 text-[#b3b3b3]'>
                    <span>{item.release_date.slice(0, 4)}</span>
                    <span>{item.album_type}</span>
                </div>
            </div>
        </Link>
    )
}

export default AlbumCard