"use client";

import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  motion,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

//  the script from viral loops
{/* <script type="text/javascript" src="https://app.viral-loops.com/widgetsV2/core/loader.js" data-campaign-id="bV8feh1VofHJCzXYMIVfwxtvkX0" id="viral-loops-loader"></script> */}
const people = [
  {
    id: 1,
    name: "Instagram",
    designation: "@get.outlier",
    image: "/img/time.png",
    href: "https://instagram.com/get.outlier",
    label: "Oct 1st",
  },
];

function Headpage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 20]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      <div className="flex justify-end items-center md:max-w-5xl max-w-lg mx-auto lg:mt-16 mt-11 md:px-8 px-9">
        {/* Display the image with the label */}
        <div className="flex items-center gap-x-2">
          <Image
            src={people[0].image}
            alt={people[0].name}
            width={32} // Half the size of the previous width (64)
            height={32} // Half the size of the previous height (64)
            className="w-8 h-8 object-cover rounded-full"
          />
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {people[0].label}
          </span>
        </div>
      </div>
    </>
  );
}

export default Headpage;

const Switch = ({ checked, setChecked }) => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  let toggleTheme = (e) => {
    setChecked(e.target.checked);
    setTheme(otherTheme);
  };
  return (
    <form className="flex space-x-4 antialiased items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          "h-7 px-1 flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[60px] relative cursor-pointer transition duration-200",
          checked ? "bg-cyan-500" : "bg-[#07070A] border-slate-800"
        )}
      >
        <motion.div
          initial={{
            width: "20px",
            x: checked ? 0 : 32,
          }}
          animate={{
            height: ["20px", "10px", "20px"],
            width: ["20px", "30px", "20px", "20px"],
            x: checked ? 32 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          className={twMerge(
            "h-[20px] block rounded-full bg-white shadow-md z-10"
          )}
        ></motion.div>
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleTheme}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
};

export function ThemeToggleNav({ className, rel, mouseX, ...props }) {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <></>;
}
