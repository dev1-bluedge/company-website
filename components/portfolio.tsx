import React from 'react'
import { FadeIn } from './animations/fade-in'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { StaggerChildren } from './animations/stagger-children'
import { projects } from '@/lib/data'

function PortfolioSection() {
  return (
    <div>
          <section
          id="portfolio"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-primary/10"
        >
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Our Work
                </div>
                <h2 className="section-heading gradient-text">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Take a look at some of our recent projects that showcase our expertise and creativity.
                </p>
              </div>
            </FadeIn>
            {/* Update the project cards to have equal height */}
            <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border shadow-soft bg-white h-[300px]"
                  whileHover={{ y: -5 }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white font-display">{project.title}</h3>
                      <p className="text-white/80 mb-4">{project.category}</p>
                      <Button size="sm" variant="secondary" asChild className="rounded-md font-medium">
                        <Link href="#contact">View Details</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
            <FadeIn delay={0.6} className="flex justify-center mt-12">
              <Button variant="outline" asChild className="rounded-md font-medium">
                <Link href="#contact">View All Projects</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
    </div>
  )
}

export default PortfolioSection