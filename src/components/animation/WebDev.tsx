"use client"

import Lottie from "lottie-react";
import animationData from "@/assests/Animations/WebsiteBuilding.json";

export default function LottieSection() {
  return (
    <Lottie animationData={animationData} loop={true} autoplay={true} style={{marginTop:-135}} />
  );
}
