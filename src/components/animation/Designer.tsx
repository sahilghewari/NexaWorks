"use client"

import Lottie from "lottie-react";
import animationData from "@/assests/Animations/Designer.json";

export default function LottieSection() {
  return (
    <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: 600, height: 600, marginTop:6,marginLeft:100 }}/>
  );
}
 