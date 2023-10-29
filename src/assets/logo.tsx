import * as React from "react";
import { motion } from "framer-motion";


export default function MainLogo() {

  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 3000); 
  };

    const icon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      };

    return(
        <motion.svg  className="item" width={138} height="71.8" viewBox="0 0 138 71.8" xmlns="http://www.w3.org/2000/svg"><motion.g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#ffffff" strokeWidth="0.25mm" fill="#ffffff" style={{stroke: '#ffffff', strokeWidth: '0.25mm', fill: '#ffffff'}} ><motion.path  variants={icon}  onClick={handleClick}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 4, ease: "easeInOut", loop: Infinity },
          fill: { duration: 4, ease: [1, 0, 0.8, 1], loop: Infinity }
        }} d="M 18.8 67 L 18.8 45.6 L 23.4 45.6 A 22.781 22.781 0 0 1 25.833 45.713 C 30.106 46.176 31.404 48.137 33.8 53.1 L 40.4 67 L 62.3 67 L 55.3 51.8 A 32.432 32.432 0 0 0 51.892 45.723 C 50.38 43.713 48.517 42.085 45.923 40.943 A 18.472 18.472 0 0 0 43.2 40 L 43.2 39.1 A 23.199 23.199 0 0 0 49.369 37.602 C 54.264 35.593 56.948 31.888 58.028 26.74 A 29.999 29.999 0 0 0 58.6 20.6 C 58.6 8.405 51.974 1.345 38.043 0.174 A 51.908 51.908 0 0 0 33.7 0 L 0 0 L 0 67 L 18.8 67 Z M 80.1 67 L 84.4 54.1 L 109.8 54.1 L 113.9 67 L 134.5 67 L 111.3 0 L 84 0 L 60.7 67 L 80.1 67 Z M 18.8 16.9 L 33 16.9 A 18.794 18.794 0 0 1 35.312 17.022 C 38.581 17.432 39.69 18.943 39.792 22.609 A 21.291 21.291 0 0 1 39.8 23.2 A 17.226 17.226 0 0 1 39.659 25.584 C 39.181 28.967 37.399 30 33 30 L 18.8 30 L 18.8 16.9 Z M 91.1 33.8 L 96.6 16.3 L 98 16.3 L 103.3 33.8 L 104.5 37.7 L 89.8 37.7 L 91.1 33.8 Z" vectorEffect="non-scaling-stroke" /></motion.g></motion.svg>
    )
}