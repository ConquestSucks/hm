import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Tour from "../pages/Tour";
import Home from "../pages/Home";
import { Suspense } from "react";
import { MusicLazy } from "../pages/music/Music.lazy";
import { MediaLazy } from "../pages/media/Media.lazy";
import MediaSkeleton from "../pages/media/MediaSkeleton";
import DisplayAlbumSkeleton from "../components/music/album-details/DisplayAlbumSkeleton";
import { AlbumDetailsLazy } from "../components/music/album-details/AlbumDetails.Lazy";
import RouterBasedMusicFallback from "../components/music/RouterBasedMusicFallback";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/tour',
                element: <Tour />
            },
            {
                path: '/music',
                element: <Suspense fallback={<RouterBasedMusicFallback />}>
                    <MusicLazy />
                </Suspense>,
                children: [
                    {
                        path: ':id',
                        element: <Suspense fallback={<DisplayAlbumSkeleton />}>
                            <AlbumDetailsLazy />
                        </Suspense>,
                    }
                ]
            },
            {
                path: '/media',
                element: <Suspense fallback={<MediaSkeleton />}>
                    <MediaLazy />
                </Suspense>
            }
        ]
    },
]);

export default router