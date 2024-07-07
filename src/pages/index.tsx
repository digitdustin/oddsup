import ActionButton from "@/components/ActionButton";
import DiscordLogo from "@/components/assets/DiscordLogo";
import { FlickerText } from "@/components/FlickerText";
import RetroGrid from "@/components/retro-grid";
import { HelpCircle } from "lucide-react";
import { motion as m } from "framer-motion";
import { useState } from "react";
import HowItWorksDialog from "@/components/HowItWorksDialog";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-screen overflow-auto bg-[#101012] flex items-center justify-center">
      <HowItWorksDialog open={open} setOpen={setOpen} />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.7, delay: 1, ease: "easeOut" }}
        className="w-full h-full absolute inset-0 pointer-events-none"
      >
        <RetroGrid />
      </m.div>
      <m.header
        initial={{ opacity: 0, y: -20, scaleY: 0.9 }}
        animate={{ opacity: 1, y: 0, scaleY: 1 }}
        transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
        className="w-full pl-6 py-4 pr-4 flex items-center absolute top-0 justify-between"
      >
        <p className="text-white text-base font-clash font-[650]">ODDSUP</p>
        <div className="flex gap-x-2">
          <button
            onClick={() => setOpen(true)}
            className="h-8 px-3 bg-[#101012] hover:bg-white/10 rounded-md flex items-center justify-center"
          >
            <p className="text-white/60 text-sm">How it works</p>
          </button>
        </div>
      </m.header>
      <div className="max-w-4xl w-full mx-auto p-4">
        {/* <div className="p-px flex mb-4 items-center mx-auto justify-center rounded-full bg-gradient-to-r from-white/30 to-white/10 w-fit">
          <div className="px-3 py-1 mx-auto bg-[#101012] rounded-full">
            <p className="text-white/60 text-sm font-semibold">Next Draw in</p>
          </div>
        </div> */}
        <div className="p-px bg-gradient-to-r from-transparent w-fit mx-auto md:from-indigo-200/60 md:overflow-hidden md:via-indigo-300 md:to-indigo-500 rounded-lg">
          <div className="md:p-4 md:px-8 p-0 md:bg-zinc-950 rounded-lg bg-transparent">
            <FlickerText />
          </div>
        </div>
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
          className="text-white/60 text-center text-lg mt-0 sm:mt-4 md:mt-8 mb-8"
        >
          The only lottery you have a chance of winning.
        </m.p>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7, ease: "easeOut" }}
          className="relative w-fit mx-auto"
        >
          <a
            href="https://https://discord.gg/syPaZBM6pV"
            target="_blank"
            rel="noreferrer"
            className="focus:outline-none"
          >
            <ActionButton
              color="gray"
              className="mt-4 !h-10 px-3 z-10 focus:!ring-violet-500/20 focus:!ring-4 focus:!outline-none"
              spanClassName="!text-base"
            >
              {/* <div className="w-6 h-6">
                <DiscordLogo />
              </div> */}
              <p>Secure Your Spot</p>
            </ActionButton>
          </a>
        </m.div>
        {/* <p className="text-white/60 text-center text-sm mt-4">
          Free entry for the next{" "}
          <span className="text-indigo-400 font-semibold">100</span> users
        </p> */}
      </div>
    </div>
  );
}
