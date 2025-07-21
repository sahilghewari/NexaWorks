"use client"

import Lottie from "lottie-react";
import animationData from "@/assests/Animations/Designer.json";

export default function LottieSection() {
  return (
    <div className="w-full flex justify-center items-center">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true} 
        style={{ width: '100%', maxWidth: 400, height: 'auto', marginTop: 6 }}
      />
    </div>
  );
}
 