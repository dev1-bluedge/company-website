"use client"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-[300px] max-w-[80vw] bg-background border-l shadow-xl z-50 overflow-y-auto"
          >
            <div className="flex flex-col p-6 h-full">
              <div className="flex justify-end mb-8">
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6 text-lg font-medium">
                <Link href="#services" className="hover:text-primary transition-colors" onClick={onClose}>
                  Services
                </Link>
                <Link href="#portfolio" className="hover:text-primary transition-colors" onClick={onClose}>
                  Our Work
                </Link>
                <Link href="#testimonials" className="hover:text-primary transition-colors" onClick={onClose}>
                  Testimonials
                </Link>
                <Link href="#about" className="hover:text-primary transition-colors" onClick={onClose}>
                  About
                </Link>
                <Link href="#contact" className="hover:text-primary transition-colors" onClick={onClose}>
                  Contact
                </Link>
              </nav>
              <div className="mt-auto pt-8">
                <Link
                  href="#contact"
                  className="w-full inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                  onClick={onClose}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
