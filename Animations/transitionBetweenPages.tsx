import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function TransitionBetweenPages({ children }: React.PropsWithChildren<Record<string, unknown>>) {
  const router = useRouter()

  const variants = {
    initialState: {
      opacity: 0,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    },
    animateState: {
      opacity: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    },
    exitState: {
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1.5,
        }}
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
