"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShaderAnimation } from "@/components/ui/shader-animation"

export default function WelcomeIntro() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const timer = setTimeout(() => setVisible(false), 3200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] cursor-pointer"
          onClick={() => setVisible(false)}
        >
          {/* Shader background */}
          <div className="absolute inset-0">
            <ShaderAnimation />
          </div>

          {/* "Boas-vindas!" text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-mono text-sm uppercase tracking-[0.3em] text-white/40 mb-4"
            >
              guilherme.dev
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white text-center"
            >
              Boas-vindas!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-6 font-mono text-xs text-white/30 tracking-widest uppercase"
            >
              clique para entrar
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
