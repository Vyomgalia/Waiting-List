"use client";

import Link from "next/link";
import Image from "next/image";

import {
  motion,
} from "framer-motion";

import Snowfall from "react-snowfall";
{/* <form-widget mode='popup' ucid='bV8feh1VofHJCzXYMIVfwxtvkX0'></form-widget> */}
const people = [
  {
    id: 1,
    name: "JOIN NOW",
    designation: "How bout u join my waitlist 😂",
    image: "/img/email.png",
    href: "https://instagram.com/get.outlier",
  },
];

function PageHook() {
  // <form-widget ucid='bV8feh1VofHJCzXYMIVfwxtvkX0'></form-widget>
  return (
    <div className="h-full w-full p-3 flex items-center justify-center relative z-50">
      <Snowfall
        snowflakeCount={200}
        color="grey"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -9,
        }}
        speed={"140"}
        radius={"12"}
      />
      <section className=" mt-5  ">
        <div className="space-y-4 ">
          <div className="space-y-2 text-center">
            <div className="flex justify-center">
              <Image
                width={128}
                height={128}
                alt="shake head"
                src={"/img/shake.gif"}
                className="w-32"
              />
            </div>
            <h1 className="text-3xl font-bold  sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-800 capitalize md:max-w-2xl lg:max-w-3xl mx-auto ">
              Skincare designed for busy men.
            </h1>
            <p className="max-w-[600px]  leading-7 text-center text-[20px] bg-clip-text text-transparent dark:bg-gradient-to-br bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-700 mx-auto ">
              We’ve got your back—well, actually, your face 😛 Join the waitlist
              and get a flat 50% off on all orders at the time of launch.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pt-10">
              <span>🔥</span>
              <div className="p-[1px] bg-transparent  relative">
                <div className="p-2 ">
                  <Link href="./about-us">What is Outlier?</Link>
                  <span className="absolute inset-0 px-3 rounded-3xl overflow-hidden">
                    <motion.span
                      className="w-[500%] aspect-square absolute bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-20"
                      initial={{ rotate: -90 }}
                      animate={{ rotate: 90 }}
                      transition={{
                        duration: 3.8,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{
                        translateX: "-50%",
                        translateY: "-10%",
                        zIndex: -1,
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>

        {/* Custom Section */}
        <section className="mt-10 pt-5">
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center bg-black bg-opacity-50 p-8 rounded-lg shadow-md w-[400px] h-[250px] z-10">
            <div className="mb-4">
                <Image
                    src="/public/img/email.png"
                    alt="Logo 1"
                    width={40}
                    height={40}
                />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
                Products designed for you
            </h3>
            <p className="text-sm text-center text-gray-200">
                We get it—nobody likes applying greasy, uncomfortable products.
                That’s why we’ve crafted our skincare with you in mind. Imagine
                easy-to-apply options like roll-on serum, sunscreen spray, and
                more.
            </p>
            <div className="absolute inset-0 rounded-lg shadow-lg shadow-black/20 -z-10"></div>
        </div>

        <div className="flex flex-col items-center bg-black bg-opacity-50 p-8 rounded-lg shadow-md w-[400px] h-[250px] z-10">
            <div className="mb-4">
                <Image
                    src="/path/to/logo2.png"
                    alt="Logo 2"
                    width={40}
                    height={40}
                />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
                We keep it simple, promise.
            </h3>
            <p className="text-sm text-center text-gray-200">
                Vitamin C, glycolic acid, and salicylic acid. Who cares? We know
                you don’t. That’s why our products are formulated with only the
                stuff you actually care about.
            </p>
            <div className="absolute inset-0 rounded-lg shadow-lg shadow-black/20 -z-10"></div>
        </div>

        <div className="flex flex-col items-center bg-black bg-opacity-50 p-8 rounded-lg shadow-md w-[400px] h-[250px] z-10">
            <div className="mb-4">
                <Image
                    src="/path/to/logo3.png"
                    alt="Logo 3"
                    width={40}
                    height={40}
                />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
                Easy on your pocket
            </h3>
            <p className="text-sm text-center text-gray-200">
                We’ve priced our products so low that even your dad would be
                proud of your smart investment.
            </p>
            <div className="absolute inset-0 rounded-lg shadow-lg shadow-black/20 -z-10"></div>
        </div>
    </div>
</section>
      </section>
    </div>
  );
}

export default PageHook;
