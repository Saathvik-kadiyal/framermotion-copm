import React from "react";
import {AnimatePresence, easeInOut, easeOut, motion} from 'motion/react'

const ExitAnimations = () => {
  const [open,setOpen] = React.useState(true);
  return (
    <>
    <AnimatePresence>
    {open && 
    (<motion.div className="w-72 min-h-104 rounded-xl h-104 p-6 flex flex-col  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]" exit={{opacity:0,scale:0.95,filter:"blur(10px)"}} initial={{opacity:0,scale:0.95,filter:"blur(10px)"}} animate={{opacity:1,scale:1,filter:"blur(0px)"}} transition={{duration:0.5,ease:easeInOut}}>
      <h2 className="font-bold text-[10px]">UI components</h2>
      <p className="text-neutral-600 mt-2 text-[10px]">
        A collection of beautiful components
      </p>
      <div className="flex items-center justify-center">
        <button className=" flex gap-4 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1" onClick={() => setOpen(false)}>
          Ui components
          <span className="font-medium text-neutral-400">X</span>
        </button>
      </div>
      <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
        <motion.div
        initial={{opacity:0,scale:0.98,fliter:"blur(10px)"}}
        whileHover={{opacity:1,scale:1.02,filter:"blur(0px)"}}
        transition={{duration:0.5,
          ease:easeOut
        }}
        className="absolute inset-0 h-full w-full rounded-lg bg-white divide-y divide-neutral-200 border border-neutral-200">
          <div className="p-4 text-[10px] flex items-start">abc</div>
          <div className="p-4 text-[10px] flex items-start">abc</div>
          <div className="p-4 text-[10px] flex items-start">abc</div>
        </motion.div> 
      </div>
    </motion.div>)}
    </AnimatePresence>
    </>
  );
};

export default ExitAnimations;
