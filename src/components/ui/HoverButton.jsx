import React from 'react'
import {motion} from'motion/react'

const HoverButton = () => {
  return (
    <div className='[perspective::1000px] transform-3d h-screen w-full bg-neutral-950 flex justify-center items-center' style={{
        backgroundImage:`radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.1) 1px, transparent 0)`,
        backgroundSize:"8px 8px",
        backgroundRepeat:"repeat"
    }}>
        <motion.button
        whileHover={{rotateX:25,
            rotateY:10,
            y:-5,
            boxShadow:"0 20px 30px rgba(8,112,184,0.7)"
        }}
        style={{
            translateZ:100
        }}
        whileTap={{
            y:0
        }}
        className='group text-neutral-500 px-12 py-4 rounded-lg cursor-pointer bg-black shadow-[0px_1px_4px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rdba(255,255,255,0.1)_inset] relative'>Submit
            <span className='absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
        <span className='opacity-0 group-hover:opacity-100 transition:opacity duration-300 absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mx-auto blur-md h-1 w-full'>
            </span>
        </motion.button>

    </div>
  )
}

export default HoverButton