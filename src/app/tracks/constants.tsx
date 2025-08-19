import darkness from "@/shared/images/darkness.jpg";
import FateImage from "@/shared/images/FATE.jpg";
import poGorodyImage from "@/shared/images/PO_GORODU.jpg";


export const songsArr = [
  {
    id: 4,
    title: "РАССВЕТ-ЗАКАТ",
    audioSrc: "rasswet.wav",
    image: darkness,
    about: [
      {
        title: "Release",
        value: "2025/08/22"
      },
      {
        title: "Lyrics, Music, Vocals, Guitar, Piano, Synth, Bass, Drums",
        value: "Sergey Shmidt"
      },
      {
        title: "Recording, Mixing, Mastering",
        value: `Tonee Jukeboxx</br><a  class="songs-page__link" href="https://duomastering.de/" target="_blank" rel="noreferrer" >(Duomastering)</a>`
      },
    ],
    spotify: "",
    appleMusic: "",
    yandex: "",
    disabled: false
  },
  {
    id: 1,
    title: "ТЕМНОТА",
    audioSrc: "temnota.wav",
    image: darkness,
    about: [
      {
        title: "Release",
        value: "2024/06/28"
      },
      {
        title: "Lyrics, Music, Vocals, Guitars, Bass",
        value: "Sergey Shmidt"
      },
      {
        title: "Drums",
        value: "Alexander Goubko"
      },
      {
        title: "Recording, Mixing, Mastering",
        value: `Kevin Nietsch</br><a  class="songs-page__link" href="https://www.kn-musikproduktion.de/" target="_blank" rel="noreferrer" >(KN-Musikproduktion)</a>`
      }
    ],

    spotify: "https://open.spotify.com/album/6ZqKOmtKcsp5QpYbKwWsRO",
    appleMusic: "https://music.apple.com/us/album/темнота-single/1754069648",
    yandex: "https://music.yandex.ru/album/32228930",
    disabled: false
  },
  {
    id: 2,
    title: "FATE",
    audioSrc: "FATE.wav",
    image: FateImage,
    about: [
      {
        title: "Release",
        value: "2023/03/10"
      },
      {
        title: "Lyrics, Music, Vocals, Guitars, Bass",
        value: "Sergey Shmidt"
      },
      {
        title: "Drums",
        value: "Alexander Goubko"
      },
      {
        title: "Recording, Mixing, Mastering",
        value: `Steffen Burkhardt</br><a
        class="songs-page__link"
        href="https://www.scb-music.de/"
        alt="scb-music"
        target="_blank"
        rel="noreferrer"
      >SCB-Music</a>`
      },
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
        title: "Release",
        value: "2022/05/13"
      },
      {
        title: "Lyrics, Music, Vocals, Guitars, Bass",
        value: "Sergey Shmidt"
      },
      {
        title: "Drums",
        value: "Alexander Goubko"
      },
      {
        title: "Recording, Mixing, Mastering",
        value: `Steffen Burkhardt</br><a
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
