import { ChevronLeftIcon, ChevronRightIcon, House, Users } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react"

const Variants = () => {
  const [open, setOpen] = useState(false);

  const sidebarVariant = {
    open: {
      width: "16rem",
      transition: {
        type: "tween",
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      width: "4.5rem",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const parentVarients={
    open:{
      transition:{
        staggerChildren:0.07,
        delayChildren:0.3,
        opacity:1
    }
  },
    closed:{
      transition:{
        staggerChildren:0.05,
        staggerDirection:-1,
        delayChildren:0.2,
        opacity:1
      }
    }
  }

  const childVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <motion.nav
      initial={false}
      animate={open ? "open" : "closed"}
      variants={sidebarVariant}
      className="h-screen bg-gray-300 p-5 pt-8 border-r border-neutral-100 overflow-hidden"
      style={{ width: open ? "16rem" : "4.5rem" }}
    >
      <div className="flex justify-between items-center">
        <motion.h2
          variants={childVariants}
          className="text-xl font-semibold text-gray-700 overflow-hidden whitespace-nowrap"
        >
          {open && "Dashboard"}
        </motion.h2>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-400"
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </button>
      </div>
      <motion.ul className="flex flex-col gap-y-4 mt-8" variants={parentVarients}>
        {[
          { icon: <House />, label: "Home" },
          { icon: <Users />, label: "Users" },
          { icon: <House />, label: "Home" },
          { icon: <Users />, label: "Users" },
        ].map((item, index) => (
          <motion.li key={index} variants={childVariants}>
            <a className="flex items-center gap-3 p-2 text-gray-700 rounded hover:bg-gray-200">
              {item.icon}

              {open && (
                <motion.span
                  variants={childVariants}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Variants;
