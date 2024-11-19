import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageLazy({ src, alt, className }: ImageProps) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      className={className}
    />
  );
}
