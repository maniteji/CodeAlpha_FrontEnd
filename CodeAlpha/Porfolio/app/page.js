import Image from "next/image";
import WorkExperience from "./components/WorkExperience";
import WhatIDo from "./components/WhatIDo";
import Footer from "./components/Footer";
import SendAMessage from "./components/SendAMessage";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <main className="flex justify-between p-24 px-60 max-sm:px-0 max-sm:p-0 max-lg:p-0">
        <div className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1] absolute top-2/4 left-80 max-sm:relative max-sm:left-0 max-sm:top-0 max-lg:relative" />
        <div className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1] absolute top-10 left-10 max-sm:relative max-sm:left-0 max-lg:relative" />
        <div className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1] absolute top-2/5 left-96 max-sm:relative max-sm:left-0" />
        <div className="flex flex-1 flex-row max-sm:flex-col">
          <div className="flex-1 flex-col flex items-center gap-3 ">
            <div className="relative w-80 h-80">
              <Image
                src={"/profile_image.jpg"}
                alt="Self potrait"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h1 className="font-bold text-2xl">My Name</h1>
            <p className="px-20 text-start max-sm:px-0">
              I&apos;m John Doe, a seasoned Full Stack Developer specializing in
              creating dynamic web applications. Proficient in front-end and
              back-end technologies like JavaScript, Python, and various
              frameworks, I merge functionality with user-centric design to
              deliver immersive digital experiences
            </p>
          </div>
          <div className="flex-1 flex-col gap-4 flex">
            <hr className="opacity-20" />
            <h1 className="font-bold text-xl">Working Experience</h1>
            <WorkExperience
              title={"Frontend Developer"}
              location={"Blabla"}
              duration={"Feb 2020-July 2020"}
            />
            <WorkExperience
              title={"UI/UX Internship"}
              location={"Blabla"}
              duration={"July 2020-Sep 2020"}
            />
            <WorkExperience
              title={"Frontend Developer"}
              location={"Blabla"}
              duration={"Feb 2020-July 2020"}
            />
            <hr className="opacity-20" />
            <h1 className="font-bold text-xl">What I do</h1>
            <WhatIDo
              title={"Website Design"}
              description={
                "I design and develop static and dynamic websites.I design and develop static and dynamic websites.I design and develop static and dynamic websites.I design and develop static and dynamic websites."
              }
            />
            <WhatIDo
              title={"Figma Prototyping"}
              description={
                "I design and develop static and dynamic websites.I design and develop static and dynamic websites.I design and develop static and dynamic websites.I design and develop static and dynamic websites."
              }
            />
            <WhatIDo
              title={"Backend Development"}
              description={
                "I design and develop static and dynamic websites.I design and develop static and dynamic websites.I design and develop static and dynamic websites.I design and develop static and dynamic websites."
              }
            />
          </div>
        </div>
      </main>
      <Work />
      <SendAMessage />
      <Footer />
    </div>
  );
}
