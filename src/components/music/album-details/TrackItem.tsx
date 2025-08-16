import type { SimplifiedTrackObject } from "../../../types/spotify"
import { formatTrackDuration } from "../../../utils/formatTrackDuration"

interface TrackItemProps {
    track: SimplifiedTrackObject
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
    console.log(track.is_playable)
    return (
        <a href={track.external_urls.spotify} target="_blank" className='flex w-full justify-between items-center rounded-md px-4 py-2 hover:bg-[#1E1E1E] active:bg-[#1E1E1E]'>
            <div className="flex gap-5 items-center">
                <div className="rounded w-6 flex justify-center"><span>{track.track_number}</span></div>
                <div className="flex flex-col gap-1">
                    <span className="rounded text-xl font-bold">{track.name}</span>
                    <div className="rounded text-md text-gray-300">
                        {
                            track.artists.map((artist, i) => 
                            <span key={i}>
                                {artist.name} 
                                {i < track.artists.length - 1 ? ', ' : ''} 
                            </span>)
                        }
                    </div>
                </div>
            </div>
            <span className="rounded text-md text-gray-300">{formatTrackDuration(track.duration_ms)}</span>
        </a>
    )
}

export default TrackItem