import Image from "next/image";

interface ImageProps {
  href: string;
}

interface Props {
  images: ImageProps[];
}

export const ProjectPics = ({ images }: Props) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full 4xl:justify-center 4xl:space-x-20 space-y-20 4xl:space-y-0 4xl:flex">
        {images[0] && (
          <Image
            src={images[0].href}
            alt="lighthouse performance score"
            height={950}
            width={950}
            className="rounded-3xl object-cover mx-auto 4xl:mx-0"
          />
        )}
        {images[1] && (
          <Image
            src={images[1].href}
            alt="lighthouse performance score"
            height={950}
            width={950}
            className="rounded-3xl object-cover mx-auto 4xl:mx-0"
          />
        )}
      </div>
      <div className="w-full pt-20 4xl:ml-[500px]">
        {images[2] && (
          <Image
            src={images[2].href}
            alt="lighthouse performance score"
            height={950}
            width={950}
            className="rounded-3xl object-cover mx-auto 4xl:mx-0"
          />
        )}
      </div>
      <div className="pt-20 4xl:ml-[1000px] pb-20">
        {images[3] && (
          <Image
            src={images[3].href}
            alt="lighthouse performance score"
            height={950}
            width={950}
            className="rounded-3xl object-cover mx-auto 4xl:mx-0"
          />
        )}
      </div>
    </div>
  );
};
