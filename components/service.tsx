import Link from 'next/link'
import React from 'react'
import { StaggerChildren } from './animations/stagger-children'
import { FadeIn } from './animations/fade-in'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { services } from '@/app/page'
function Service() {
  return (
    <div>
        <section id="services" className="w-full py-16 md:py-24 lg:py-32">
                  <div className="container px-4 md:px-6">
                    <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                          Our Services
                        </div>
                        <h2 className="section-heading gradient-text">What We Offer</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                          We provide comprehensive digital solutions tailored to your business needs.
                        </p>
                      </div>
                    </FadeIn>
                    {/* Update the service cards to have equal height */}
                    <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                      {services.map((service, index) => (
                        <motion.div
                          key={index}
                          className="flex flex-col items-center space-y-3 rounded-xl border p-8 shadow-soft bg-white transition-all hover:shadow-card hover:border-primary/20 h-full"
                          whileHover={{ y: -5 }}
                        >
                          <div className="p-3 bg-primary/10 rounded-full text-primary">{service.icon}</div>
                          <h3 className="text-xl font-bold font-display">{service.title}</h3>
                          <p className="text-center text-muted-foreground flex-grow">{service.description}</p>
                          <Link href="#contact" className="flex items-center text-primary hover:underline mt-auto">
                            Learn more <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </motion.div>
                      ))}
                    </StaggerChildren>
                  </div>
                </section>
    </div>
  )
}

export default Service