import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./videoCarousel";
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to("#link-video", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highligts"
      className="w-screen h-full overflow-hidden px-5 py-20 sm:px-10 sm:py-32 bg-[#101010]"
    >
      <div className="relative max-w-[1120px] me-auto ms-auto">
        <div className="w-full flex items-end justify-between mb-12 md:flex">
          <h1
            id="title"
            className="text-[#86868B] lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
          >
            Get the highlights
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p
              id="link-video"
              className="text-apple-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20"
            >
              Watch the film
              <img src={watchImg} className="ml-2" alt="watch" />
            </p>
            <p
              id="link-video"
              className="text-apple-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20"
            >
              Watch the event
              <img src={rightImg} className="ml-2" alt="right" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
