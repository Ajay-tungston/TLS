import React, { useState } from "react";
import { Heart } from "lucide-react";

const HeartIcon = () => {
    const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    if (!liked) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500); // match animation duration
    }
    setLiked(!liked);
  };
  return (
    <div
      onClick={handleClick}
      className={`w-[23px] h-[21px] md:w-[25px] md:h-[22px] flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ${
        animate ? "animate-pop-shake" : ""
      }`}
    >
      <Heart
        size={28}
        className={`transition-colors duration-300 ${
          liked ? "text-red-500 fill-red-500" : "text-[#D8D8D8] fill-[#A1A1A1]"
        }`}
      />
    </div>
  );
};

export default HeartIcon;
