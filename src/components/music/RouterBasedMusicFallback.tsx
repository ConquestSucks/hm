import { useLocation, matchPath } from "react-router-dom";
import MusicSkeleton from "../../pages/music/MusicSkeleton";

export default function RouterBasedMusicFallback() {
    const location = useLocation();

    const isRootMusic = matchPath("/music", location.pathname);

    return isRootMusic ? <MusicSkeleton /> : null;
}
