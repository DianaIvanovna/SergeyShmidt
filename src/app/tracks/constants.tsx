import darkness from "@/shared/images/darkness.png";
import FateImage from "@/shared/images/FATE.png";
import poGorodyImage from "@/shared/images/PO_GORODU.png";


export const songsArr = [
  {
    id: 1,
    title: "ТЕМНОТА",
    audioSrc: "PO_GORODU.wav",
    image: darkness,
    about: [
      {
        title: "Lyrics, Music, Arrangement",
        value: "Sergey Shmidt"
      },
      {
        title: "Vocals, Guitars, Bass",
        value: "Sergey Shmidt"
      },
      {
        title: "Drums",
        value: "Alexander Goubko"
      },
      {
        title: "Recording, Mixing, Mastering",
        value: "Kevin Nietsch: KN-Musikproduktion"
      }
    ],
    spotify: "https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5",
    appleMusic: "https://music.apple.com/us/album/по-городу-single/1624085601",
    youtube:
      "https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68",
    disabled: false
  },

  {
    id: 2,
    title: "FATE",
    audioSrc: "FATE.wav",
    image: FateImage,
    about: [
      {
        title: "Lyrics, Music, Arrangement",
        value: "Sergey Shmidt"
      },
      {
        title: "Vocals, Guitars, Bass",
        value: "Sergey Shmidt"
      },
      {
        title: "Drums",
        value: "Alexander Goubko"
      },
      {
        title: "Recording, Mixing, Mastering",
        value: `Steffen Burkhardt: <a
        class="songs-page__link"
        href="https://www.scb-music.de/"
        alt="scb-music"
        target="_blank"
        rel="noreferrer"
      >SCB-Music</a>`
      }
    ],

    spotify: "https://open.spotify.com/album/3ySiYyEghhNxYjJwfTMZJx",
    appleMusic: "https://music.apple.com/us/album/fate-single/1671242220",
    youtube:
      "https://music.youtube.com/playlist?list=OLAK5uy_lvZUkdeIXnIxXURXFMZqzG14vllMDtDr8",
    disabled: false
  },
  {
    id: 3,
    title: "ПО ГОРОДУ",
    audioSrc: "PO_GORODU.wav",
    image: poGorodyImage,
    about: [
      {
        title: "Lyrics, Music, Arrangement",
        value: "Sergey Shmidt"
      },
      {
        title: "Vocals, Guitars, Bass",
        value: "Sergey Shmidt"
      },
      {
        title: "Drums",
        value: "Alexander Goubko"
      },
      {
        title: "Recording, Mixing, Mastering",
        value: `Steffen Burkhardt: <a
        class="songs-page__link"
        href="https://www.scb-music.de/"
        alt="scb-music"
        target="_blank"
        rel="noreferrer"
      >SCB-Music</a>`
      }
    ],
    spotify: "https://open.spotify.com/album/3aYe9WeszUGbFqw3bo7Cx5",
    appleMusic: "https://music.apple.com/us/album/по-городу-single/1624085601",
    youtube:
      "https://music.youtube.com/playlist?list=OLAK5uy_lfJ1EusWQOwm17DbfSyxgzZ2kDi-44F68",
    disabled: false
  }
];
