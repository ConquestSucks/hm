import type { SimplifiedTrackObject } from "../../../types/spotify"
import { formatTrackDuration } from "../../../utils/formatTrackDuration"

interface TrackItemProps {
    track: SimplifiedTrackObject
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
    return (
        <div className='flex w-full max-h-fit justify-between items-center grow rounded-md px-4 py-2 hover:bg-[#1E1E1E] active:bg-[#1E1E1E]'>
            <div className="flex gap-5 items-center">
                <div className="rounded">{track.track_number}</div>
                <div className="flex flex-col gap-1">
                    <span className="rounded text-xl font-bold">{track.name}</span>
                    <div className="rounded text-md text-gray-300">
                        {
                            track.artists.map((artist)=> <span>{artist.name}, </span>)
                        }
                    </div>
                </div>
            </div>
            <span className="rounded text-md text-gray-300">{formatTrackDuration(track.duration_ms)}</span>
        </div>
    )
}

export default TrackItem