import { useEffect } from "react";
import DisplayAlbums from "../../components/music/DisplayAlbums"
import MusicSkeleton from "./MusicSkeleton"
import { Outlet, useParams } from "react-router-dom";
import { albumStore } from "../../store/albumStore";
import { observer } from "mobx-react-lite";

const Music = observer(() => {
    const params = useParams();
    
    useEffect(() => {
        if (!params.id) albumStore.fetchAlbums();
    }, [params.id]);

    if (params.id) {
        return <Outlet />;
    }

    return (
        <div className="overflow-y-auto h-full no-scrollbar pb-10">
            {albumStore.isLoading ? (
                <MusicSkeleton />
            ) : (
                albumStore.albums && <DisplayAlbums albums={albumStore.albums} />
            )}
        </div>
    )
})

export default Music