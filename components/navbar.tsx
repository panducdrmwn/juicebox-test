"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";
import { cn } from "@/lib/utils";
import { fontAgrandir } from "@/public/fonts";
import backbtn from '../public/back.svg'
import Image from "next/image";
import gsap from "gsap";
import {useRef, useLayoutEffect, useEffect} from "react";



export default function Navbar(props) {

    const juiceboxRef = useRef<HTMLAnchorElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    const handleClick =()=>{
      if (props.reality === 0){
        props.setReality(1)
      }
        else if (props.reality >= 2){
          props.setReality(props.reality-1)
          props.swiperef.current.activeIndex = 2
      }  else if (props.swiperef.current.activeIndex == 0){
        props.setReality(0)
        props.zoomIn
      } else if (props.swiperef.current.activeIndex !== 0){
        props.swiperef.current.slidePrev()
      } 
    }

    useLayoutEffect(() => {
      if (textRef.current) {
        textRef.current.style.display = 'inline-block';
        textRef.current.style.overflow = 'hidden';
        textRef.current.style.whiteSpace = 'nowrap';
      }
    }, []);

    const animateToJB = () => {
      if (textRef.current) {
        gsap.to(textRef.current, {
          duration: 0.4,
          width: 0,
          onComplete: () => {
            if (textRef.current) {
              textRef.current.textContent = "jb";
              gsap.to(textRef.current, {
                duration: 0.4,
                width: textRef.current.scrollWidth,
              });
            }
          }
        });
      }
    };

    const animateToJuicebox = () => {
      if (textRef.current) {
        gsap.to(textRef.current, {
          duration: 0.4,
          width: 0,
          onComplete: () => {
            if (textRef.current) {
              textRef.current.textContent = "juicebox";
              gsap.to(textRef.current, {
                duration: 0.4,
                width: textRef.current.scrollWidth,
              });
            }
          }
        });
      }
    };

    // useEffect(()=> {
    //  console.log(props.swiperef.current.activeIndex)
    // },[props.swiperef.current.activeIndex])

  return (
    <header>
    <nav className={cn("antialiased", fontAgrandir.variable)}>
      <div className="pt-[20px] flex flex-row justify-between items-center">
        <Image  className={`-translate-x-6 ${props.reality === 0 && 'opacity-0'}`}
        src="/back.svg"
        alt="back button"
        width={80}
        height={38}
        priority
        onClick={handleClick}
        />
        <a
          ref={juiceboxRef}
          className={`font-bold font-agrandir`}
          onMouseEnter={animateToJB}
          onMouseLeave={animateToJuicebox}
        >
          <span ref={textRef} className="text-[24px] font-[1000] text-white">juicebox</span>
        </a>
        <Image  className="translate-x-6"
        src="/contact.svg"
        alt="back button"
        width={80}
        height={50}
        priority/>
      </div>
    </nav>
  </header>
  )
}
