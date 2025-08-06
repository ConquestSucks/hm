import type { Artist } from "../../types/artist"

interface AstistcardProps {
    artist: Artist
}

const ArtistCard: React.FC<AstistcardProps> = ({ artist }) => {
    return (
        <div className="flex flex-col grow-1 gap-5 lg:w-1/2 bg-gradient-to-r lg:bg-gradient-to-b from-slate-900 to-slate-700 p-5">
            <div className="flex gap-5 items-center">
                <div
                    style={{ backgroundImage: `url(${artist.image})` }}
                    className="shrink-0 bg-cover w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full"
                />
                <h1 className="font-viperr font-extrabold w-fit text-2xl md:text-5xl lg:text-7xl text-center">{artist.name}</h1>
            </div>
            <div className="flex flex-col lg:gap-5 bg-gradient-to-r lg:bg-gradient-to-br from-slate-900 to-slate-600 rounded-lg p-5">
                {artist.links.map((link) => <span>{link.social} - @<a href={link.url}  className="hover:underline active:underline decoration-dotted">{link.tag}</a></span>)}
            </div>
        </div>
    )
}

export default ArtistCard