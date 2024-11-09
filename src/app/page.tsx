"use client";

import { useEffect } from 'react';
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/Skills"
import AOS from "aos"
import "aos/dist/aos.css";

export default function Home(){
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom", 
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return(
    <>
      <Hero />
      <Projects />
      <Skills />
    </>
  )
}