import { FC } from "react";
import "./style.scss";

interface BackgroundImageProps {
  sources: {
    srcSet: string,
    media: string
  }[],
  mainImageSrc: string,
  alt: string,
  className?: string
}

export const BackgroundImage: FC<BackgroundImageProps> = ({ sources, mainImageSrc, alt, className }) => {

  return (
    <picture className={"background-image"}>
      {sources.map(({ media, srcSet }, key) => (
        <source media={media} srcSet={srcSet} key={key} />
      ))}

      <img src={mainImageSrc} alt={alt} style={{ backgroundColor: "black" }} className={className} />
    </picture>
  );
};