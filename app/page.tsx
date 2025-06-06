"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { MobileNav } from "@/components/mobile-nav"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Service from "@/components/service"

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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
            <span className="text-xl font-display font-bold">Acme Inc</span>
          </motion.div>
          <motion.nav
            className="hidden md:flex gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Our Work
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </motion.nav>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild className="rounded-md font-medium hidden sm:flex">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden" onClick={() => setMobileNavOpen(true)}>
              <span className="sr-only">Open menu</span>
              <Menu className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2">
                    Professional Solutions
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter py-1 sm:text-5xl xl:text-6xl/none font-display gradient-text">
                    Transforming Ideas Into Digital Excellence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We create innovative digital solutions that help businesses grow, engage customers, and achieve
                    their goals.
                  </p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button asChild size="lg" className="rounded-md font-medium">
                    <Link href="#contact">
                      Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="rounded-md font-medium">
                    <Link href="#portfolio">View Our Work</Link>
                  </Button>
                </motion.div>
              </FadeIn>
              <FadeIn direction="left" delay={0.3} className="flex items-center justify-center">
                <div
                  className="relative"
                >
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 blur-xl"></div>
                  <Image
                    src="/images/hero-image.jpg"
                    alt="Business team collaborating on digital project"
                    width={550}
                    height={550}
                    className="relative rounded-xl object-cover shadow-card"
                    priority
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Service/>

        {/* Portfolio Section */}
      <PortfolioSection />

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Testimonials
                </div>
                <h2 className="section-heading gradient-text">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
            </FadeIn>
            {/* Update the testimonial cards to have equal height */}
            <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col justify-between space-y-4 rounded-xl border p-8 shadow-soft bg-white transition-all hover:shadow-card hover:border-primary/20 h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="space-y-3">
                    <div className="flex gap-0.5">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-primary"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center space-x-3 mt-auto">
                    <div className="overflow-hidden rounded-full border-2 border-primary/20">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold font-display">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <FadeIn direction="left" className="flex items-center justify-center">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 blur-xl"></div>
                  <Image
                    src="/images/about-image.jpg"
                    alt="Our team in the office"
                    width={600}
                    height={400}
                    className="relative rounded-xl object-cover shadow-card"
                  />
                </motion.div>
              </FadeIn>
              <FadeIn direction="right" delay={0.3} className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                    About Us
                  </div>
                  <h2 className="section-heading gradient-text">Our Story</h2>
                  <p className="text-muted-foreground md:text-xl">
                    Founded in 2015, we've been helping businesses transform their digital presence for over 8 years.
                    Our team of experts is passionate about creating innovative solutions that drive results.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-display">Why Choose Us</h3>
                  <StaggerChildren className="grid gap-3">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-soft"
                        whileHover={{ x: 5 }}
                      >
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </StaggerChildren>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button asChild className="rounded-md font-medium">
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Section */}
       <ContactSection/>
      </main>
      <Footer/>
    </div>
  )
}

// Sample data
export const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience and engagement.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "E-commerce Solutions",
    description: "Online stores and marketplaces with secure payment processing.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "SEO, content marketing, and social media strategies to grow your business.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps services for your applications.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
]

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/images/project-1.jpg",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "/images/project-2.jpg",
  },
  {
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    image: "/images/project-3.jpg",
  },
  {
    title: "Healthcare Dashboard",
    category: "Web Application",
    image: "/images/project-4.jpg",
  },
  {
    title: "Restaurant Ordering System",
    category: "Full Stack Development",
    image: "/images/project-5.jpg",
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    image: "/images/project-6.jpg",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechStart",
    quote:
      "Working with Acme Inc. transformed our online presence. Their team delivered a website that exceeded our expectations and has significantly increased our conversion rates.",
    rating: 5,
    avatar: "/images/testimonial-1.jpg",
  },
  {
    name: "Michael Chen",
    title: "Marketing Director, GrowthCo",
    quote:
      "The mobile app they developed for us has received outstanding feedback from our users. Their attention to detail and user experience expertise is unmatched.",
    rating: 5,
    avatar: "/images/testimonial-2.jpg",
  },
  {
    name: "Emily Rodriguez",
    title: "Founder, EcoStore",
    quote:
      "They helped us launch our e-commerce platform in record time without compromising on quality. The ongoing support has been exceptional.",
    rating: 4,
    avatar: "/images/testimonial-3.jpg",
  },
]

const benefits = [
  "Expert team with 8+ years of industry experience",
  "Tailored solutions that meet your specific business needs",
  "Transparent communication and project management",
  "Ongoing support and maintenance",
  "Commitment to delivering projects on time and within budget",
]
