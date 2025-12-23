import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";

gsap.registerPlugin(ScrollTrigger);
const HowItWorks = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".g_fadeIn", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".g_fadeIn",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="px-5 py-20 sm:px-10 sm:py-32">
      <div className="screen-max-width">
        <div
          id="chip"
          className="flex items-center justify-center w-full my-20"
        >
          <img src={chipImg} height={180} width={180} alt="chip" />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-center md:text-7xl">
            A17 Pro chip. <br /> A monster win for gaming.
          </h2>
          <p className="text-gray-500 font-semibold text-xl md:text-2xl py-10 text-center">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 mb-14 md:mt-20">
          <div className="relative h-full flex items-center justify-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt=""
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="absolute w-[75%] h-[90%] rounded-[56px] overflow-hidden">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} typeof="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray-500 font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-start gap-24">
          <div className="flex flex-1 justify-center flex-col">
            <p className="text-apple-gray text-xl font-normal md:font-semibold opacity-0 translate-y-[100px] g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>

            <p className="text-apple-gray text-xl font-normal md:font-semibold opacity-0 translate-y-[100px] g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col opacity-0 translate-y-[100px] g_fadeIn">
            <p className="text-apple-gray text-xl font-normal md:font-semibold">
              New
            </p>
            <p className="text-white text-3xl md:text-5xl font-normal md:font-semibold my-2">
              Pro-class GPU
            </p>
            <p className="text-apple-gray text-xl font-normal md:font-semibold">
              with 6 cores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
