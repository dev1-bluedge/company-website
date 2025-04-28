"use client"

import React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  duration?: number
  viewTriggerOffset?: number
}

export function StaggerChildren({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.5,
  viewTriggerOffset = 0.1,
}: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: viewTriggerOffset })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child

        return (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        )
      })}
    </motion.div>
  )
}
