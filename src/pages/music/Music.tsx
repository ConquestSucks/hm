import { useEffect, useState } from "react";
import DisplayAlbums from "../../components/music/DisplayAlbums"
import MusicSkeleton from "./MusicSkeleton"
import type { SimplifiedAlbumObject } from "../../types/spotify";
import { getArtistAlbums } from "../../api";
import { kai, mice } from "../../constants/artistId";

const Music = () => {
    const [artistAlbums, setArtistAlbums] = useState<SimplifiedAlbumObject[]>();
    const [isLoading, setIsloading] = useState<boolean>(true)

    useEffect(() => {
        async function fetchAlbums() {
            setIsloading(true)

            try {
                const kaiAlbums = await getArtistAlbums(kai);
                const miceAlbums = await getArtistAlbums(mice)
                const albums = [
                    ...kaiAlbums.artistAlbums.items,
                    ...miceAlbums.artistAlbums.items
                ]

                const filteredAlbums = albums.filter((album, index, self) => index === self.findIndex((item) => item.name === album.name)) // delete duplicate

                setArtistAlbums(filteredAlbums)
            } catch (error) {
                console.error('Error fetching albums:', error)
            } finally {
                setIsloading(false)
            }
        };

        fetchAlbums();
    }, []);

    return (
        <div className="overflow-y-auto h-full no-scrollbar pb-10">
            {isLoading ? (
                <MusicSkeleton />
            ) : (
                artistAlbums && <DisplayAlbums albums={artistAlbums} />
            )}
        </div>
    )
}

export default Music