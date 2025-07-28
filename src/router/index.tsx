import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Tour from "../pages/Tour";
import Home from "../pages/Home";
import { Suspense } from "react";
import MusicSkeleton from "../pages/music/MusicSkeleton";
import { MusicLazy } from "../pages/music/Music.lazy";
import { MediaLazy } from "../pages/media/Media.lazy";
import MediaSkeleton from "../pages/media/MediaSkeleton";
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
                element: <Suspense fallback={<MusicSkeleton/>}>
                    <MusicLazy/>
                </Suspense>
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