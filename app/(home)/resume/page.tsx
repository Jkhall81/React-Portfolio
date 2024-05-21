import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

const pdfSrc = "/resume/Jason-Hall-Resume-May-2024.pdf";

const ResumePage = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <iframe
        className="pt-16"
        src={pdfSrc}
        width="100%"
        height="100%"
        allowFullScreen
      />
    </div>
  );
};

export default ResumePage;
