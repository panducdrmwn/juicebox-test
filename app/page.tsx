"use client"
import Image from "next/image";
import { fontAgrandir, fontBagoss, fontSohne } from "@/public/fonts";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef, useState, MutableRefObject } from "react";
import type { Swiper as SwiperClass } from "swiper/types";
import { useRouter } from 'next/navigation';
import Carousel from "@/components/carousel";
import Navbar from "@/components/navbar";
import '../app/globals.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home({}) {
  const imageRef = useRef(null);
  const swiper = useRef<SwiperClass | null>(null);
  const [reality, setReality] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [slide, setSlide] = useState(true)
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleZoomOut = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { scale: 0.5, duration: 1, ease: "power2.out" });
    }
    setReality(1);
  };

  const handleZoomOutMore = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { scale: 0.1, duration: 1, ease: "power2.out", y:"-140" });
    }
     setReality(2);
  };

  const handleSwiper = () => {
    if (swiper.current && swiper.current.activeIndex !== undefined) {
      if (swiper.current.activeIndex <= 1) {
        swiper.current.slideNext();
      } else if (swiper.current.activeIndex === 2) {
        handleZoomOutMore();
      }
    }
  };

  useEffect(()=>{
    if (imageRef.current && reality === 0) {
      gsap.to(imageRef.current, { scale: 1, duration: 1, ease: "power2.out" });
    }
    if (imageRef.current && reality === 1) {
      gsap.to(imageRef.current, { scale: 0.5, duration: 1, ease: "power2.out", y:'0%'});
    }
  },[reality])

  const validateName = (name: string) => {
    if (!name.trim()) return "Name is required.";
    if (!/^[a-zA-Z\s'-]+$/.test(name)) return "Name must contain only letters.";
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return "Email is required.";
    // Simple email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email address.";
    return "";
  };

  return (
    <>
      <div
        className={`wrapper px-8 ${
          swiper.current && swiper.current.activeIndex === 0 ? "bg-bg" : "bg-animate"
        }`}
      >
        <Navbar
          reality={reality}
          setReality={setReality}
          swiperef={swiper}
          setSlide={setSlide}
        />
        <div
          className={`relative h-[85%] pt-[28px] flex flex-col justify-between items-center ${cn(
            "antialiased",
            fontBagoss.variable
          )} ${cn("antialiased", fontSohne.variable)}`}
        >
          {/* <DotLottieReact
            id="image2"
              src={"/JB2G_Lottie.json"}
              loop
              autoplay
            /> */}
          <div className="relative w-full">
            <Image
              id="image1"
              ref={imageRef}
              src={"/Vector.png"}
              alt="main vector"
              width={274}
              height={290}
              className="pb-[28px] self-center m-auto"
            />
           
            {reality == 0 && (
              <div
                className={`absolute h-full w-full flex top-0 flex-col justify-around ${cn(
                  "antialiased",
                  fontSohne.variable
                )} font-sohne text-white text-[12px]`}
              >
                <span>WA businesses feel confident about future growth </span>
                <span className="self-end">AI cant replace creativity</span>
                <span>Sales measure true success</span>
                <span className="self-end">
                  Human connection drives WA business
                </span>
                <span>
                  The primary barrier to digital <br /> transformation is
                  financial investment
                </span>
              </div>
            )}
          </div>

          {reality === 0 ? (
            <span className="font-bagoss text-white text-[28px] mb-[24px] font-[400] leading-[120%] text-center">
              Compare your thoughts on
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FABBFF] via-[#B179FF] to-[#6DDDFF]">
                {" "}
                technology
              </span>{" "}
              with current industry opinions.
            </span>
          ) : reality === 1 ? (
            <Carousel swiperRef={swiper} />
          ) : reality == 2 ? (
            <span className="absolute top-[20%] text-[19px] text-white font-bagoss text-center font-[400]">
              Let’s start with the basics. Type in your <br /> first name.
            </span>
          ) : reality == 3 ? (
            <span className="absolute top-[20%] text-[19px] text-white font-bagoss text-center font-[400]">
              How should we contact you? Type in <br />
              your email address.
            </span>
          ) : (
            reality == 4 && (
              <span className="absolute top-[20%] text-[19px] text-white font-bagoss text-center font-[400]">
                Thanks, {firstName}! Now, it’s time to get a<br /> reality
                check.
                <br /> <br />
                 This will take 2-3 minutes.
              </span>
            )
          )}

          {reality < 2 || reality > 3 ? (
            <button
              className={`w-full py-[24px] my-[24px] text-[16px] leading-[135%] rounded-[19px] font-[400] !font-sohne ${
                reality === 1
                  ? "bg-transparent border-2 text-white"
                  : reality === 0
                  ? "bg-btn"
                  : swiper.current && swiper.current.activeIndex === 2
                  ? "bg-white text-black shadow-[0px_0px_0px_9px_#FFFFFF57]"
                  : ""
              }`}
              onClick={!reality ? handleZoomOut : handleSwiper}
            >
              {reality ? "Continue" : "Get a reality check"}
            </button>
          ) : reality === 2 ? (
            <div className="relative w-full">
              <div className="absolute top-4 left-3">
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
              </div>
              <input
              id="myInput"
                type="text"
                className="h-14 mb-[8px] w-full border-1 p-[14px] rounded-[18px] z-0 placeholder-gray-400 text-[16px] font-[400] font-sohne text-[#FFFFFF]"
                placeholder="First name" 
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setNameError("");
                }}
                value={firstName}
              />
              {nameError && <div className="text-red-400 text-xs mb-2 ml-2">{nameError}</div>}
              <div className="absolute top-3 right-2">
                <Image
                  alt="submit"
                  src={"./Icon.svg"}
                  width={31}
                  height={31}
                  className=" text-white rounded-lg m-auto"
                  onClick={() => {
                    const err = validateName(firstName);
                    if (err) {
                      setNameError(err);
                    } else {
                      setNameError("");
                      setFirstName("");
                      setReality(3);
                    }
                  }}
                />
              </div>
            </div>
          ) : reality === 3 && (
          <div className="relative w-full">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
          </div>
          <input
          id="myInput"
            type="email"
            className="h-14 mb-[8px] w-full border-1 p-[14px] rounded-[18px] z-0 placeholder-gray-400 text-[16px] font-[400] font-sohne text-[#FFFFFF]"
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            value={email}
          />
          {emailError && <div className="text-red-400 text-xs mb-2 ml-2">{emailError}</div>}
          <div className="absolute top-3 right-2">
            <Image
              alt="submit"
              src={"./Icon.svg"}
              width={31}
              height={31}
              className=" text-white rounded-lg m-auto"
              onClick={() => {
                const err = validateEmail(email);
                if (err) {
                  setEmailError(err);
                } else {
                  setEmailError("");
                  setEmail("");
                  setReality(4);
                }
              }}
            />
          </div>
          </div>
          )}
        </div>
      </div>
    </>
  );
}
