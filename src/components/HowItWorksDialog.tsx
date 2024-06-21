import React from "react";
import { motion as m, AnimatePresence } from "framer-motion";

const HowItWorksDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed pointer-events-none inset-0 flex items-center justify-center w-full h-full !z-20 overflow-auto">
      <m.div
        className="w-full h-full bg-zinc-950/90"
        style={{
          pointerEvents: open ? "auto" : "none",
          backdropFilter: "blur(1px)",
        }}
        onClick={() => {
          setOpen(false);
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: open ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      ></m.div>
      <AnimatePresence mode="sync">
        {open ? (
          <m.div
            className="absolute z-10 flex flex-col gap-3"
            style={{
              pointerEvents: open ? "auto" : "none",
            }}
            initial={{
              scale: 0.98,
              translateY: 5,
              opacity: 0,
            }}
            animate={{
              scale: open ? 1 : 0.98,
              translateY: open ? 0 : 5,
              opacity: open ? 1 : 0,
            }}
            exit={{
              scale: 0.98,
              translateY: 5,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <m.div
              className="p-px w-[30rem] flex items-center justify-center relative max-w-[calc(100vw-16px)] rounded-md bg-gradient-to-r from-indigo-200/60 via-indigo-300 to-indigo-500 shadow-lg"
              layout
            >
              <div className="p-4 w-full rounded-[5px] bg-zinc-950">
                <h2 className="text-white text-base font-[600]">
                  How it works
                </h2>
                <p className="text-white/60 text-sm mt-4">
                  Your chances of ever winning the lottery are 1 in 350 million.
                  At OddsUp, we turn those odds in your favor.
                </p>
                <p className="text-white/60 text-sm mt-4">
                  For a small $5 monthly subscription ($1.25 weekly), you’re
                  entering yourself into winning up to $20,000 and other cash
                  prizes, where 3 lucky individuals win weekly.
                </p>
                <p className="text-white/60 text-sm mt-4">
                  1 in 350 million vs. 3 in 100,000.
                </p>
                <p className="text-white/60 text-sm mt-4 mb-3">
                  You do the math. See you on the winning side.
                </p>
                <a
                  href="discord.gg/Ptsc6RbZ"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                  }}
                  className="text-white text-sm mt-4 pt-4 underline"
                >
                  Join the Discord
                </a>
              </div>
            </m.div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default HowItWorksDialog;
