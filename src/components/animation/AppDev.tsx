"use client"

import Lottie from "lottie-react";
import animationData from "@/assests/Animations/SocialMediaMarketing.json";

export default function LottieSection() {
  return (
    <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: 500, height: 500, marginTop:8,marginLeft:110 }}/>
  );
}