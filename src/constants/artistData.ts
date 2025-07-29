import KaiAvatar from "../assets/kaiAngel.jpg";
import MiceAvatar from "../assets/9mice.jpg";
import type { Artist } from "../types/artist";

const data: Artist[] = [
  {
    image: KaiAvatar,
    name: "Kai Angel",
    links: [
      { social: "Telegram", url: "https://t.me/sektakai" },
      { social: "Instagram", url: "" },
      { social: "TikTok", url: "" },
    ],
  },
  {
    image: MiceAvatar,
    name: "9mice",
    links: [
      { social: "Telegram", url: "https://t.me/the9mice" },
      { social: "Instagram", url: "" },
      { social: "TikTok", url: "" },
    ],
  },
];

export default data;
