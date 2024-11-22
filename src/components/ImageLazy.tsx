import { HTMLAttributes } from "react";
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";

type ImageProps = HTMLAttributes<HTMLImageElement> &
  LazyLoadImageProps & {
    src: string;
    alt: string;
    className?: string;
  };

export default function ImageLazy({
  src,
  alt,
  className,
  ...props
}: ImageProps) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={`transition-opacity duration-500 ease-in-out ${className}`}
      {...props}
    />
  );
}
