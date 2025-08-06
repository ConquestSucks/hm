import KaiAvatar from "../assets/kaiAngel.jpg";
import MiceAvatar from "../assets/9mice.jpg";
import type { Artist } from "../types/artist";

const data: Artist[] = [
  {
    image: KaiAvatar,
    name: "Kai Angel",
    links: [
      { social: "Telegram", url: "https://t.me/sektakai", tag: "sektakai" },
      { social: "Instagram", url: "https://www.instagram.com/kai4ngel", tag: "kai4ngel" },
      { social: "TikTok", url: "https://www.tiktok.com/@kai4ngel", tag: "kai4ngel" },
    ],
  },
  {
    image: MiceAvatar,
    name: "9mice",
    links: [
      { social: "Telegram", url: "https://t.me/the9mice", tag: "the9mice" },
      { social: "Instagram", url: "https://www.instagram.com/9mice", tag: "9mice" },
      { social: "TikTok", url: "https://www.tiktok.com/@9mice", tag: "9mice" },
    ],
  },
];

export default data;
