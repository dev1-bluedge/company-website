import React from 'react'
import{ motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div>
        <footer className="w-full border-t py-8 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-primary rounded-md p-1.5">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Company Logo"
                width={24}
                height={24}
                className="rounded invert"
              />
            </div>
            <span className="text-lg font-display font-bold">Acme Inc</span>
          </motion.div>
          <motion.p
            className="text-center text-sm leading-loose text-muted-foreground md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {new Date().getFullYear()} Acme Inc. All rights reserved.
          </motion.p>
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default Footer