import { useState, useRef, useEffect } from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

export default function Header({
  selectedCity,
  setSelectedCity,
  cities
}) {

  const [isOpen, setIsOpen] =
    useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {

    function handleClickOutside(
      event
    ) {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target
        )
      ) {
        setIsOpen(false);
      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      className="
        relative
        w-full
        overflow-visible
        rounded-[32px]
        border
        border-amber-200
        bg-gradient-to-br
        from-white
        via-amber-50
        to-amber-100
        backdrop-blur-2xl
        p-6
        shadow-[0_20px_60px_rgba(0,0,0,0.06)]
        mb-8
      "
    >

      <div
        className="
          absolute
          -top-16
          -right-16
          w-52
          h-52
          rounded-full
          bg-amber-300/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-white/30
          backdrop-blur-[2px]
          rounded-[32px]
        "
      />

      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-6
          items-center
        "
      >

        <div className="lg:col-span-8">

          <motion.h1
            initial={{
              opacity: 0,
              x: -10
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="
              text-3xl
              xl:text-4xl
              font-black
              tracking-tight
              text-neutral-900
              leading-tight
            "
          >
            Property Tax
            <span
              className="
                bg-gradient-to-r
                from-amber-500
                to-yellow-600
                bg-clip-text
                text-transparent
                ml-2
              "
            >
              Analytics
            </span>
            Dashboard
          </motion.h1>

          <div
            className="
              flex
              items-center
              gap-3
              mt-4
            "
          >

            <div className="relative flex h-3 w-3">

              <span
                className="
                  animate-ping
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-green-500
                  opacity-75
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  rounded-full
                  h-3
                  w-3
                  bg-green-500
                "
              />

            </div>

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-neutral-500
              "
            >
              UPYOG Multi-Tenant Platform
            </p>

          </div>

        </div>

        <div
          className="
            lg:col-span-4
            w-full
            max-w-sm
            justify-self-end
          "
          ref={dropdownRef}
        >

          <label
            className="
              block
              mb-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-neutral-500
            "
          >
            Select City
          </label>

          <div className="relative">

            <motion.button
              whileHover={{
                scale: 1.01
              }}
              whileTap={{
                scale: 0.99
              }}
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className={`
                w-full
                flex
                items-center
                justify-between
                px-5
                py-3.5
                rounded-2xl
                border
                bg-white/70
                backdrop-blur-xl
                text-neutral-900
                font-semibold
                transition-all
                duration-300
                shadow-lg
                ${
                  isOpen
                    ? `
                      border-amber-400
                      ring-4
                      ring-amber-100
                    `
                    : `
                      border-amber-200
                    `
                }
              `}
            >

              <span className="truncate">
                {selectedCity}
              </span>

              <motion.svg
                animate={{
                  rotate: isOpen
                    ? 180
                    : 0
                }}
                transition={{
                  duration: 0.2
                }}
                className="
                  w-5
                  h-5
                  text-amber-500
                "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />

              </motion.svg>

            </motion.button>

            <AnimatePresence>

              {isOpen && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.97
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.97
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="
                    absolute
                    left-0
                    top-full
                    mt-3
                    w-full
                    z-[9999]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-amber-200
                    bg-white/80
                    backdrop-blur-2xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.1)]
                  "
                >

                  <div
                    className="
                      max-h-72
                      overflow-y-auto
                      p-2
                    "
                  >

                    {cities.map((city) => {

                      const isSelected =
                        selectedCity === city;

                      return (

                        <motion.button
                          key={city}
                          whileHover={{
                            x: 4
                          }}
                          onClick={() => {

                            setSelectedCity(city);

                            setIsOpen(false);

                          }}
                          className={`
                            w-full
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            transition-all
                            duration-200
                            ${
                              isSelected
                                ? `
                                  bg-gradient-to-r
                                  from-amber-500
                                  to-yellow-500
                                  text-white
                                  shadow-lg
                                `
                                : `
                                  text-neutral-800
                                  hover:bg-amber-50
                                `
                            }
                          `}
                        >

                          <span>
                            {city}
                          </span>

                          {isSelected && (

                            <motion.svg
                              layoutId="active-city"
                              className="
                                w-4
                                h-4
                              "
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >

                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />

                            </motion.svg>

                          )}

                        </motion.button>

                      );

                    })}

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        </div>

      </div>

    </motion.div>
  );
}