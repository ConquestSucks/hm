import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { albumStore } from "../../../store/albumStore";
import { observer } from "mobx-react-lite";
import DisplayAlbumSkeleton from "./DisplayAlbumSkeleton";
import DisplayAlbum from "./DisplayAlbum";

const AlbumDetails = observer(() => {
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            albumStore.currentAlbum = null
            albumStore.fetchAlbum(id);
        }
    }, [id]);

    return (
        <div className="flex justify-center overflow-y-auto no-scrollbar grow-1">
            {albumStore.isLoading ?
                <DisplayAlbumSkeleton /> :
                (albumStore.currentAlbum && <DisplayAlbum album={albumStore.currentAlbum} />)
            }
        </div>
    )
});

export default AlbumDetails;
