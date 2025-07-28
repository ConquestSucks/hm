export interface ArtistLink {
  social: 'Telegram' | 'Instagram' | 'TikTok' | string;
  url: string;
}

export interface Artist {
  image: string;
  name: string;
  links: ArtistLink[];
}