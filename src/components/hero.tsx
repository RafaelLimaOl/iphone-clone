import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#callToAction", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) setVideoSrc(smallHeroVideo);
    else setVideoSrc(videoSrc);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  return (
    <section className="w-full h-[calc(100vh-60px)] relative">
      <div className="h-5/6 w-full flex justify-center items-center flex-col ">
        <p
          id="hero-title"
          className="text-center font-semibold text-3xl text-[#86868B] opacity-0 max-md:mb-10"
        >
          iPhone 15 Pro
        </p>

        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            key={videoSrc}
            autoPlay
            muted
            playsInline={true}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        className="flex flex-col items-center opacity-0 translate-y-20"
        id="callToAction"
      >
        <a
          href="#highlights"
          className="rounded-3xl px-5 py-2 my-5 text-center bg-apple-blue hover:bg-transparent border border-transparent hover:border hover:text-apple-blue hover:border-apple-blue"
        >
          Buy
        </a>
        <p className="font-normal text-xl"> From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
