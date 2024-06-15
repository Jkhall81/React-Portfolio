import Image from "next/image";

export const ProjectPics = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full 4xl:justify-center 4xl:space-x-20 space-y-20 4xl:space-y-0 4xl:flex">
        <Image
          src="/images/LightHouse.png"
          alt="lighthouse performance score"
          height={950}
          width={950}
          className="rounded-3xl object-cover mx-auto 4xl:mx-0"
        />
        <Image
          src="/images/FAQ.png"
          alt="lighthouse performance score"
          height={950}
          width={950}
          className="rounded-3xl object-cover mx-auto 4xl:mx-0"
        />
      </div>
      <div className="w-full pt-20 4xl:ml-[500px]">
        <Image
          src="/images/PatientFormIntro.png"
          alt="lighthouse performance score"
          height={950}
          width={950}
          className="rounded-3xl object-cover mx-auto 4xl:mx-0"
        />
      </div>
      <div className="pt-20 4xl:ml-[1000px] pb-20">
        <Image
          src="/images/ProviderForm1.png"
          alt="lighthouse performance score"
          height={950}
          width={950}
          className="rounded-3xl object-cover mx-auto 4xl:mx-0"
        />
      </div>
    </div>
  );
};
