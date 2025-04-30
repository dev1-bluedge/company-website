import React from 'react'
import { StaggerChildren } from './animations/stagger-children'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FadeIn } from './animations/fade-in'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

function ContactSection() {
  return (
    <div>
         <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
                  <div className="container px-4 md:px-6">
                    <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                          Contact Us
                        </div>
                        <h2 className="section-heading gradient-text">Let's Start a Conversation</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                          Ready to take your business to the next level? Get in touch with us today.
                        </p>
                      </div>
                    </FadeIn>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
                      <StaggerChildren className="space-y-6">
                        <motion.div
                          className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-soft"
                          whileHover={{ y: -5 }}
                        >
                          <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <MapPin className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg font-display">Address</h3>
                            <p className="text-muted-foreground">123 Business Street, Suite 100, San Francisco, CA 94107</p>
                          </div>
                        </motion.div>
                        <motion.div
                          className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-soft"
                          whileHover={{ y: -5 }}
                        >
                          <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <Mail className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg font-display">Email</h3>
                            <p className="text-muted-foreground">hello@acmeinc.com</p>
                          </div>
                        </motion.div>
                        <motion.div
                          className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-soft"
                          whileHover={{ y: -5 }}
                        >
                          <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <Phone className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg font-display">Phone</h3>
                            <p className="text-muted-foreground">(123) 456-7890</p>
                          </div>
                        </motion.div>
                        <motion.div className="rounded-xl border p-6 shadow-soft bg-white" whileHover={{ y: -5 }}>
                          <h3 className="font-bold text-lg mb-4 font-display">Business Hours</h3>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="font-medium">Monday - Friday</div>
                            <div>9:00 AM - 6:00 PM</div>
                            <div className="font-medium">Saturday</div>
                            <div>10:00 AM - 4:00 PM</div>
                            <div className="font-medium">Sunday</div>
                            <div>Closed</div>
                          </div>
                        </motion.div>
                      </StaggerChildren>
                      <FadeIn direction="left" delay={0.3}>
                        <motion.div
                          className="rounded-xl border bg-white p-8 shadow-card"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <div className="space-y-2">
                                <label
                                  htmlFor="first-name"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  First name
                                </label>
                                <input
                                  id="first-name"
                                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  placeholder="John"
                                />
                              </div>
                              <div className="space-y-2">
                                <label
                                  htmlFor="last-name"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Last name
                                </label>
                                <input
                                  id="last-name"
                                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  placeholder="Doe"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label
                                htmlFor="email"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Email
                              </label>
                              <input
                                id="email"
                                type="email"
                                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="john.doe@example.com"
                              />
                            </div>
                            <div className="space-y-2">
                              <label
                                htmlFor="phone"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Phone
                              </label>
                              <input
                                id="phone"
                                type="tel"
                                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="(123) 456-7890"
                              />
                            </div>
                            <div className="space-y-2">
                              <label
                                htmlFor="message"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Message
                              </label>
                              <textarea
                                id="message"
                                className="flex min-h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Tell us about your project..."
                              />
                            </div>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                              <Button type="submit" className="w-full rounded-md font-medium">
                                Send Message
                              </Button>
                            </motion.div>
                          </form>
                        </motion.div>
                      </FadeIn>
                    </div>
                  </div>
                </section>
    </div>
  )
}

export default ContactSection