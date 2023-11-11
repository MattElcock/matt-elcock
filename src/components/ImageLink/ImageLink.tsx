import Image from "next/image";

type ImageLinkProps = {
  linkHref: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
};

const ImageLink = ({
  linkHref,
  imgSrc,
  imgAlt,
  imgWidth = 60,
  imgHeight = 60,
}: ImageLinkProps) => {
  return (
    <a href={linkHref} className="w-full p-2 rounded-lg bg-violet-500">
      <div className="flex flex-col items-center gap-1">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          priority
        />
        <span className="text-sm">{imgAlt}</span>
      </div>
    </a>
  );
};

export { ImageLink };
