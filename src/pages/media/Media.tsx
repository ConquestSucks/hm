import type { Artist } from "../../types/artist"
import ArtistData from '../../constants/artustData.json'
import ArtistCard from "../../components/media/ArtistCard"

const Media = () => {
    return (
        <div className="flex flex-col grow-1 lg:flex-row">
            {ArtistData.map((artist: Artist, id) => <ArtistCard key={id} artist={artist} />)}
        </div>
    )
}

export default Media