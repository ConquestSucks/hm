import ArtistData from '../../constants/artistData'
import ArtistCardSkeleton from '../../components/media/ArtistCardSkeleton'

const MediaSkeleton = () => {
  return <div className='flex flex-col grow-1 lg:flex-row'>
    {ArtistData.map((_, i) => <ArtistCardSkeleton key={i} />)}
  </div>
}

export default MediaSkeleton