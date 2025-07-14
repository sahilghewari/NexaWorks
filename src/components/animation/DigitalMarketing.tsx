"use client"

import Lottie from "lottie-react";
import animationData from "@/assests/Animations/DigitalMarketing.json";

export default function LottieSection() {
  return (
    <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: 450, height: 450, marginTop:8,marginLeft:140 }}/>
  );
}
