import { FC } from "react";
import styles from "./style.module.scss";

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
    <picture className={styles["background-image"]}>
      {sources.map(({ media, srcSet }, key) => (
        <source media={media} srcSet={srcSet} key={key} />
      ))}

      <img src={mainImageSrc} alt={alt} className={className} />
    </picture>
  );
};